import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screen/authetic/LoginScreen';
import RegistrationScreen from '../screen/authetic/RegistrationScreen';
import PopularProduct from '../screen/tabRoute/PopularProduct';
import SearchItems from '../screen/tabRoute/SearchItems';
import TabNavigator from './TabNavigator';

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Registration" component={RegistrationScreen} />
      <Auth.Screen name="popularProduct" component={PopularProduct} />
      <Auth.Screen name="searchItems" component={SearchItems} />
      <Auth.Screen name="Home" component={TabNavigator} />
    </Auth.Navigator>
  );
}
