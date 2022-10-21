import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Email from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../redux/action/Action';
import {Color} from '../constant/Color';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginActive, setLoginActive] = useState(true);
  const datafetch = useSelector(state => state.userInput.loginpage);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const emailValidator = () => {
    if (email == '') {
      setEmailError('email cannot be empty');
    } else {
      setEmailError('');
    }
  };
  const passwordValidator = () => {
    if (userPassword == '') {
      setPasswordError('Password can not be Empty');
    } else {
      setPasswordError('');
    }
  };

  const dispatchCredentials = () => {
    dispatch(addUser(email, userPassword));
    navigation.navigate('TabNav');
  };

  const validator = () => {
    if (email == '' && userPassword == '') {
      setLoginActive(true);
    } else {
      setLoginActive(false);
    }
  };

  return (
    <SafeAreaView>
      <Image
        source={require('../asset/GrocerryMain.jpeg')}
        style={styles.groceryHeader}
      />

      <Text style={styles.userInputHeader}>Email</Text>
      <View style={styles.userDetails}>
        <Email name="email" color="black" size={24} />
        <TextInput
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          value={email}
          placeholder="Email"
          autoCapitalize="words"
          onBlur={() => emailValidator()}
        />
      </View>
      <Text style={{color: Color.red}}>{emailError}</Text>

      <Text style={styles.userInputHeader}>Password</Text>
      <View style={styles.userDetails}>
        <Password name="form-textbox-password" color="black" size={24} />
        <TextInput
          onChangeText={text => setUserPassword(text)}
          value={userPassword}
          placeholder="Password"
          autoCapitalize="words"
          onBlur={() => passwordValidator()}
        />
      </View>
      <Text style={{color: Color.red}}>{passwordError}</Text>
      <TouchableOpacity
        style={styles.forgetPassword}
        onPress={() => console.log(datafetch)}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={loginActive}
        onPress={() => {validator(),dispatchCredentials();}}
        // onPress={() => {
        //   dispatch(addUser(email, userPassword));
        // }}
        style={styles.loginButtonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
      <Image
        source={require('../asset/orcontinuewith.jpeg')}
        style={styles.orContinue}
      />
      <View style={styles.bottomHeadline}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'green'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
styles = StyleSheet.create({
  groceryHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  userInputHeader: {
    paddingLeft: 60,
    paddingTop: 20,
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 330,
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
  },
  forgetPassword: {
    fontSize: 20,
    color: Color.green,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  loginButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  loginButton: {
    fontSize: 20,
    color: Color.white,
    borderRadius: 3,
    width: 100,
    height: 30,
    backgroundColor: Color.green,
    textAlign: 'center',
  },
  orContinue: {
    width: 400,
    height: 80,
    marginBottom: 120,
  },
  bottomHeadline: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default LoginPage;
