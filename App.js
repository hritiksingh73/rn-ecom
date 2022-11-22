import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import MainNavigator from './src/navigations/MainNavigator';

const App = () => {
  return (
    <Provider store={store} >
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
	  </Provider>
  );
};

export default App;
