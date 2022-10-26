import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import HomeNavigator from './src/navigator/StackScreens';

import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}> 
        <HomeNavigator/>
    </Provider>
  );
};

export default App;
