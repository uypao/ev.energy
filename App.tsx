import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './components/Navigation';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </Provider>
  )
}


