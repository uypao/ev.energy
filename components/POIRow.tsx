import React from 'react'   
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Site } from '../models'

interface Props {
    item: Site
    onPress: (id: number) => void;
}

export const POIRow = ({item, onPress}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.row}
            onPress={() => onPress(item.ID)}
        >
            <Text>{item.AddressInfo.Title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15
    }
})