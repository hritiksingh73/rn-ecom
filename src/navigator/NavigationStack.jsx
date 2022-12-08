import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PopularProducts from '../screens/PopularProducts/PopularProducts';
import SuperFresh from '../screens/HomeScreen/SuperFresh';

const stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SuperFresh"
        component={SuperFresh}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="PopularProduct"
        component={PopularProducts}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default NavigationStack;
