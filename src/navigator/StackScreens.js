import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './BottomTabHome';
import LoginPage from '../screens/LoginScreen/Login';
import RegisterPage from '../screens/RegisterScreen';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/action/Action';
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  const [user, setUser] = useState('');
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const onAuthStateChanged = user => {
    dispatch(addUser(setUser(user)));
    console.log(addUser(setUser(user)));
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user =>
      onAuthStateChanged(user),
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

/*<HomeStack.Navigator initialRouteName="LoginScreen">
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RegisterScreen"
        component={RegisterPage}
        options={{headerShown: true}}
      /> */

/* <HomeStack.Screen
        name="TabNav"
        component={AppNavigator}
        options={{headerShown: false}}
      /> */

/* <HomeStack.Screen
        name="HomeScreem"
        component={AppNavigator}
        options={{headerShown: false}}
      /> */

/* <HomeStack.Screen
        name="Super_Fresh"
        component={AppNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      /> 
    </HomeStack.Navigator>
*/

export default HomeNavigator;
