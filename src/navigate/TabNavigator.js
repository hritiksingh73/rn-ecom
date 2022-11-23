import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../screen/tabRoute/Home';
import Cart from '../screen/tabRoute/Cart';
import Search from '../screen/tabRoute/Search';
import Account from '../screen/tabRoute/Account';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'search1'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconAntDesign name={'shoppingcart'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
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
