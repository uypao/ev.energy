import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { POIFilter, Site } from '../models';
import { ApplicationState } from '../store';
import { getPOIList, chargeRequest } from '../store/poi';
import { POIRow } from './POIRow';
import { useNavigation } from '@react-navigation/native';
import {RESULTS, check, PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

export const POIList = () => {
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const {sites, fetching} = useSelector((state: ApplicationState) => state.poi)
    const [userLocation, setUserLocation] = useState<POIFilter>()

    useEffect(() => {        
        getUserLocation()
    }, [])

    useEffect(() => {
        if (!fetching) fetchData(userLocation)        
    }, [userLocation])

    const fetchData = (filters?: POIFilter) => {        
        dispatch(getPOIList(filters))
    }

    const onPress = (site: Site) => {
        navigation.navigate('POIDetail', {
            site
        })
    }

    const processLocationRequest = (result: string) => {
        switch (result) {          
            case RESULTS.LIMITED:  
            case RESULTS.DENIED:
              //handle not-granted response
              break;            
            case RESULTS.GRANTED:
                Geolocation.getCurrentPosition((pos: any) => setUserLocation(pos.coords));
              break;
          }
    }

    const getUserLocation = () => {        
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then((response) => processLocationRequest(response))        
      }

    const renderRow = ({item}: {item: Site}) => (
        <POIRow
            item={item}
            onPress={onPress}
        />
    )
    
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={d => d.ID.toString()}
                data={sites}
                renderItem={renderRow}
                refreshing={fetching}
                onRefresh={() => fetchData(userLocation)}
            />
        </SafeAreaView>
    )
}

