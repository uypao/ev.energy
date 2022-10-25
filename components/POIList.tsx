import React, { useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Site } from '../models';
import { ApplicationState } from '../store';
import { getPOIList, chargeRequest } from '../store/poi';
import { POIRow } from './POIRow';

export const POIList = () => {
    const dispatch = useDispatch<any>()
    const {sites} = useSelector((state: ApplicationState) => state.poi)

    useEffect(() => {
        dispatch(getPOIList())
    }, [])

    const onPress = (id: any) => {
        let body = {
            user: 1,
            car_id: 1,
            id,
        }
        dispatch(chargeRequest(body))
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
            />
        </SafeAreaView>
    )
}

