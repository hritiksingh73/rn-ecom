import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PopularProducts from '../screens/PopularProducts/PopularProducts';
import WishListScreen from '../screens/Wishlist/Wishlist';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import SuperFreshScreen from '../screens/HomeScreen/SuperFresh';

const stack = createNativeStackNavigator();
const HomeNavigationStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SuperFreshScreen"
        component={SuperFreshScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="PopularProduct"
        component={PopularProducts}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default HomeNavigationStack;
