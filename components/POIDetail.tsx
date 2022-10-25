import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Site } from '../models';
import { useDispatch } from 'react-redux';
import { chargeRequest } from '../store/poi';

type ParamList = {
    Detail: {
      site: Site
    };
};

export const POIDetail = () => {
    const navigation = useNavigation()
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const dispatch = useDispatch<any>()
    const {site} = route.params    

    useEffect(() => {
        navigation.setOptions({
            title: site.AddressInfo.Title
        })
    })

    const onChargeRequest = () => {
         let body = {
            user: 1,
            car_id: 1,
            id: site.ID,
        }
        dispatch(chargeRequest(body))
    }
 
    const parseAddress = () => {
        const {AddressLine1, AddressLine2, Town, StateOrProvince, Postcode, Country} = site.AddressInfo
        return [AddressLine1, AddressLine2, Town, StateOrProvince, Postcode, Country.Title].filter(Boolean).join(', ')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.address}>{parseAddress()}</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={onChargeRequest}
            >            
                <Text style={styles.text}>
                    Charge Request
                </Text>                
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    address: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 15
    },
    text:{
        color: '#FFF',
        textAlign: 'center'
    },
    button: {
        padding: 15,
         backgroundColor: 'green'
    }
})