import React from 'react';
import { Provider } from 'react-redux';
import { POIList } from './components/POIList';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
        <POIList />
    </Provider>
  )
}


