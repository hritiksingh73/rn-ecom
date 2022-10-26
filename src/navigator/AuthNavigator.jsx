import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginPage from '../screens/LoginScreen/Login';
import RegisterPage from '../screens/RegisterScreen';

const Auth = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator>
        <Auth.Screen name='LoginScreen' component={LoginPage}/>
        <Auth.Screen name='RegisterScreen' component={RegisterPage}/>
    </Auth.Navigator>
  )
}