import React from 'react';
import MainNavigator from './src/navigations/MainNavigator.jsx';
import {Provider} from 'react-redux';
import Store from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainNavigator/>
    </Provider>
  );
};

export default App;
