import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import LoginTextField from '../../../components/textInputField';
import LoginBtn from '../../../components/loginBtn';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');

  const dispatch = useDispatch();
  const registerData = useSelector(state => state.user.registerData);

  const isValidate = async () => {
    if (userEmail === '' || userPassword === '') {
      alert('please enter above details');
    } else {
      if (isValidEmail != '' || isValidPassword != '') {
        alert('please enter currect info.');
      } else {
        try {
          const Response = await auth().signInWithEmailAndPassword(
            userEmail,
            userPassword,
          );
          // console.log('Login user ++> ', Response);
          console.log('\n\n===========userDetails==========');
          // console.log('userName :', Response.additionalUserInfo.username);
          console.log('userName :', Response.user.displayName);
          console.log('userEmail :', Response.user.email);
          console.log('userNumber :', Response.user.phoneNumber);
          console.log('userPassword :', Response.user.uid);
        } catch (error) {
          if (error.code === 'auth/user-not-found') {
            alert('user not found!');
          }
          if (error.code === 'auth/wrong-password') {
            alert('you entered wrong password!');
          }
          // console.error(error.code);
        }
      }
    }
  };

  const ValidateEmail = () => {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Enter valid Email');
  };

  const ValidatePassword = () => {
    /^[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(userPassword)
      ? setIsValidPassword('')
      : setIsValidPassword('Enter valid Password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cntrItm}>
          <Image
            style={styles.headerImg}
            source={require('../../../assets/images/Grocery.jpg')}
          />
        </View>
        <Text style={styles.headerfnt}>Welcome back!</Text>

        <LoginTextField
          icon="mail"
          placeholder="Email"
          warrning={isValidEmail}
          onChangeText={val => {
            setUserEmail(val);
            ValidateEmail();
          }}
        />
        <LoginTextField
          icon="key"
          rightIcon="eye"
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
          warrning={isValidPassword}
          onChangeText={val => {
            setUserPassword(val);
            ValidatePassword();
          }}
        />

        <TouchableOpacity style={styles.forgotTxtOpacity}>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <LoginBtn name={'Login'} onPress={isValidate} />

        <View style={styles.flxDirectn}>
          <Text style={styles.orTxtRow}> __________________ </Text>
          <Text style={styles.orTxt}>OR</Text>
          <Text style={styles.orTxtRow}> __________________ </Text>
        </View>

        <Text style={styles.headerfnt}>Continue with</Text>

        <View style={styles.imgContainer}>
          <Image
            style={[styles.fbGoogleBtn, {marginRight: 6}]}
            source={require('../../../assets/images/facebook.jpg')}
          />
          <Image
            style={[styles.fbGoogleBtn, {marginLeft: 6}]}
            source={require('../../../assets/images/google.jpg')}
          />
        </View>

        <Text style={styles.footerTxt}>
          <Text>Dont't have an account?</Text>
          <Text
            style={{color: '#70c03b'}}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            {' '}
            Register here.
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
