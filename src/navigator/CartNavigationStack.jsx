import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen/CartScreen/Cart';

import CheckOutScreen from '../screens/CartScreen/CheckOutScreen/CheckOutScreen';
import DeliverySlotScreen from '../screens/CartScreen/DeliverySlotScreen/DeliverySlotScreen';
import AddAddressScreen from '../screens/AccountScreen/AddAddressScreen/AddAddressScreen';

const stack = createNativeStackNavigator();

const CartNavigationStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="DeliverySlotScreen"
        component={DeliverySlotScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default CartNavigationStack;
