import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/SearchScreen/Search';
import Cart from '../screens/CartScreen/Cart';
import Account from '../screens/AccountScreen/Account';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/DisplayVariety/HomeScreen';
import NavigationStack from './NavigationStack';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const item = useSelector(state => state.userInfo.cart);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={NavigationStack}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarBadge: item.length,
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
