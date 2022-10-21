import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroceryTabNavigator from './GroceryTabNavigator';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    console.log('Running onAuthStateChange', user);
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      {user ? <GroceryTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
