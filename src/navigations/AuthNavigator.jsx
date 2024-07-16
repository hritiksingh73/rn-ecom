import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

const AuthNavigator = () => {
  Auth = createNativeStackNavigator();

  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
