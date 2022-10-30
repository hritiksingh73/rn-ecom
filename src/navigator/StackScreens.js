import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './BottomTabHome';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {addUser} from '../redux/action/Action';
import {useDispatch /* useSelector*/} from 'react-redux';

const HomeNavigator = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  //const datafetch = useSelector(state => state.userInput.loginpage);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onAuthStateChanged = user => {
    setUser(user);
    dispatch(addUser(user.displayName, user.email, user.uid, user.phoneNumber ));
    //console.log(user);
    //console.log("DataFetch Redux Login Details======>>>>", datafetch)
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
