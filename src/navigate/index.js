import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Login from '../screen/authetic/Login';
import Registration from '../screen/authetic/Registration';
import Home from '../screen/tabRoute/Home';
import Search from '../screen/tabRoute/Search';
import Cart from '../screen/tabRoute/Cart';
import Account from '../screen/tabRoute/Account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Home" component={Tabnav} />
    </Stack.Navigator>
  );
}
const Tabnav = () => {
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
