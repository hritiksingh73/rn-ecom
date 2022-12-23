import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PopularProducts from '../screens/PopularProducts/PopularProducts';
import SuperFresh from '../screens/HomeScreen/SuperFresh';
import DisplayVariety from '../screens/DisplayVariety/DisplayVariety';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

const stack = createNativeStackNavigator();
const SearchNavigationStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="DisplayVariety"
        component={DisplayVariety}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default SearchNavigationStack;