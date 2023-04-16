import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screens/tabScreen/AccountScreen';
import OrderDetailScreen from '../screens/stackScreen/AccountScreen/OrderDetailScreen'
import OrderHistoryScreen from '../screens/stackScreen/AccountScreen/OrderHistoryScreen'
import ManageAddressScreen from '../screens/stackScreen/AccountScreen/ManageAddressScreen';
import AddAddressScreen from '../screens/stackScreen/AccountScreen/AddAddressScreen';
import EditAddressScreen from '../screens/stackScreen/AccountScreen/EditAddressScreen';
import MyProfileScreen from '../screens/stackScreen/AccountScreen/MyProfileScreen/index';
import EditProfileScreen from '../screens/stackScreen/AccountScreen/EditProfileScreen/index';
import WishListScreen from '../screens/stackScreen/WishListScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="Manage Address" component={ManageAddressScreen} />
      <Stack.Screen name="Add Address" component={AddAddressScreen} />
      <Stack.Screen name="Edit Address" component={EditAddressScreen} />
      <Stack.Screen name="Order History" component={OrderHistoryScreen}/>
      <Stack.Screen name="Order Detail" component={OrderDetailScreen} />
      <Stack.Screen name="My Profile" component={MyProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="WishList" component={WishListScreen} />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
