import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen.jsx';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen/index';
import VeggiesStackNavigator from '../navigations/VeggiesStackNavigator'
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const VeggiesTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={VeggiesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default VeggiesTabNavigator;
