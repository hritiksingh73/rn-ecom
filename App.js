import React from 'react';
import MainNavigator from './src/navigations/MainNavigator.jsx';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
};

export default App;
