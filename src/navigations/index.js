import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';
import HomeScreen from '../screens/tabNavigatorScreen/HomeScreen';

const MainNavigator = () => {
  const authStack = createNativeStackNavigator();

  return (
    <authStack.Navigator>
      <authStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="Redirecr_Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </authStack.Navigator>
  );
};

const TabNavigator = () => {
  const tabStack = createBottomTabNavigator();

  return (
    <tabStack.Navigator>
      <tabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name={'home'} size={25} />
          ),
        }}
      />
      <tabStack.Screen
        name="Search"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name={'search'} size={25} />
          ),
        }}
      />
      <tabStack.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name={'shopping-bag'} size={25} />
          ),
        }}
      />
      <tabStack.Screen
        name="Account"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name={'user'} size={25} />
          ),
        }}
      />
    </tabStack.Navigator>
  );

};

export default MainNavigator;
