import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/SearchScreen/Search';
import Cart from '../screens/CartScreen/Cart';
import Account from '../screens/AccountScreen/Account';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/DisplayVariety/HomeScreen';
import SuperFresh from '../screens/SuperFresh';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SuperFresh}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: props => <Icon name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
