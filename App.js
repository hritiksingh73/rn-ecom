import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/store/store';
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
}
