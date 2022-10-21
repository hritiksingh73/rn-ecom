import React from 'react';
import MainNavigator from './src/navigators/MainNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/store/store';
export default function App() {
  return (
    <Provider store={Store}>
      <MainNavigator />
    </Provider>
  );
}
