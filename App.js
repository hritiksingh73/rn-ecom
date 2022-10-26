import React from 'react';
import HomeNavigator from './src/navigations/HomeNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeNavigator/>
    </Provider>
  );
};

export default App;
