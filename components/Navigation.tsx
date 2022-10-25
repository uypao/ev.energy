import React from 'react';
import { 
	createStackNavigator, 
	
} from '@react-navigation/stack';
import { POIList } from './POIList';
import { POIDetail } from './POIDetail';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='POIList'
                component={POIList}
                options={{
                    title: 'Site List'
                }}                
            />
            <Stack.Screen
                name='POIDetail'
                component={POIDetail}
                
            />
        </Stack.Navigator>
    )
}