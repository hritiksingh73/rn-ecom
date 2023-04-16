import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import SelectAddressScreen from '../screens/tabScreen/CartScreen/SelectAddressScreen/index';
import SelectDeliverySlotScreen from '../screens/tabScreen/CartScreen/SelectDeliverySlotScreen/index';
import PaymentScreen from '../screens/tabScreen/CartScreen/PaymentScreen/index';
import ThankYouScreen from '../screens/tabScreen/CartScreen/ThankYouScreen';
import CartScreen from '../screens/tabScreen/CartScreen/CartScreen/index';
import Indicator from '../components/Indicator/index';
import color from '../constant/color.js';

const Stack = createNativeStackNavigator();

const StackCartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Select Address"
        component={SelectAddressScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Select Delivery Slot"
        component={SelectDeliverySlotScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Thank You"
        component={ThankYouScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackCartNavigator;
