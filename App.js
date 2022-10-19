import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from "./src/navigations"
import { Provider } from 'react-redux';
import Store from './src/redux/store/Store';

const App = () => {
    return(
        <Provider store={Store}> 
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
        </Provider>
    )
}
export default App;