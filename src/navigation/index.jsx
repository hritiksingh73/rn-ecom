import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AccountScreens,
  TabScreens,
  HomeScreens,
} from '../config/constants/screens';
import Account from '../screens/main/Account';
import Cart from '../screens/main/Cart';
import Home from '../screens/main/Home';
import Search from '../screens/main/Search';
import Addresses from '../screens/Account/Addresses';
import AddAdress from '../screens/Account/AddNewAddress';
import EditAddress from '../screens/Account/EditAddress';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        options={{
          headerTitle: AccountScreens.AccountScreen.headerTitle,
        }}
        name={AccountScreens.AccountScreen.screenName}
        component={Account}
      />

      <AccountStack.Screen
        options={{
          headerTitle: AccountScreens.Addreesses.headerTitle,
        }}
        name={AccountScreens.Addreesses.screenName}
        component={Addresses}
      />

      <AccountStack.Screen
        options={{
          headerTitle: AccountScreens.AddNewAddress.headerTitle,
        }}
        name={AccountScreens.AddNewAddress.screenName}
        component={AddAdress}
      />
      <AccountStack.Screen
        options={{
          headerTitle: AccountScreens.EditAddress.headerTitle,
        }}
        name={AccountScreens.EditAddress.screenName}
        component={EditAddress}
      />
    </AccountStack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name={HomeScreens.HomeScreen.screenName}
        component={Home}
      />
    </HomeStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabScreens.Home}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: props => <AntDesign name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={TabScreens.Search}
        component={Search}
        options={{
          tabBarIcon: props => <AntDesign name="search1" {...props} />,
        }}
      />
      <Tab.Screen
        name={TabScreens.Cart}
        component={Cart}
        options={{
          tabBarIcon: props => <AntDesign name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name={TabScreens.Account}
        component={AccountStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <AntDesign name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
