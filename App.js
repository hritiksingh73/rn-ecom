import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import HomeNavigator from './src';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
