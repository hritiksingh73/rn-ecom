import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/authetic/Login';
import Registration from '../screen/authetic/Registration';
import TabNavigator from './TabNavigator';

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Registration" component={Registration} />
      <Auth.Screen name="Home" component={TabNavigator} />
    </Auth.Navigator>
  );
}
