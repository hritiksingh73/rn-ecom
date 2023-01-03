import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import CartScreen from '../screen/tabRoute/CartScreen';
import SearchScreen from '../screen/tabRoute/SearchScreen';
import HomeStack from './HomesStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'search1'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'shoppingcart'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'profile'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
