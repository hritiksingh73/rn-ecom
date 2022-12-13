import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Email from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../LoginScreen/styles';
import FormContainer from '../../component/FormComponent/FormInput';
import auth from '@react-native-firebase/auth';
import imagePath from '../../config/Image';
import SocialMedia from '../../component/ButtonComponent/SocialMediaButton';
import firestore from '@react-native-firebase/firestore';
import {validateEmail, validatePassword} from '../../utils/Validation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const userData = useSelector(state => state.userInfo.loginpage);

  const navigation = useNavigation();

  const emailValidator = () => {
    email === '' || !validateEmail(email)
      ? setValidation({
          emailError: 'please enter a valid email (eg: A@123@Indianic.com)',
        })
      : setValidation({emailError: ''});
  };

  const passwordValidator = () => {
    userPassword === '' || !validatePassword(userPassword)
      ? setValidation({
          passwordError: 'please enter a valid password ',
        })
      : setValidation({passwordError: ''});
  };

  const dispatchCredentials = async () => {
    try {
      firestore()
        .collection(userData.name)
        .doc(userData.uid)
        .set({
          CustomerCredentials: userData,
        })
        .then(() => {
          console.log('User added! by Aditya');
        });

      const userRes = await auth().signInWithEmailAndPassword(
        email,
        userPassword,
      );
    } catch (error) {
      console.log(error.code);
    }
  };

  const facebookButton = () => {
    alert('Facebook Login Successfull!!! ');
  };
  const googleButton = () => {
    alert('Google Login Successfull!!! ');
  };

  return (
    <SafeAreaView>
      <Image source={imagePath.grocerryMain} style={styles.groceryHeader} />
      <Text style={styles.userInputHeader}>Email</Text>
      <View style={styles.userDetails}>
        <Email name="email" color="black" size={20} />
        <FormContainer
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          value={email}
          placeholder="Email"
          autoCapitalize="words"
          onBlur={() => emailValidator()}
        />
      </View>
      <Text style={styles.errormsg}>{validation.emailError}</Text>

      <Text style={styles.userInputHeader}>Password</Text>
      <View style={styles.userDetails}>
        <Icon name="key" color="black" size={20} />
        <FormContainer
          onChangeText={text => setUserPassword(text)}
          value={userPassword}
          placeholder="Password"
          autoCapitalize="words"
          onBlur={() => passwordValidator()}
          secureTextEntry={true}
          maxLength={9}
        />
      </View>
      <Text style={styles.errormsg}>{validation.passwordError}</Text>
      <TouchableOpacity
        style={styles.forgetPassword}
        onPress={() => console.log(datafetch)}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={
          !validateEmail(email) || !validatePassword(userPassword)
            ? true
            : false
        }
        onPress={() => {
          dispatchCredentials();
        }}
        style={styles.loginButtonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>

      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.continuewith}>Continue With</Text>

      <View style={styles.bottomSocialMedia}>
        <TouchableOpacity
          style={styles.bottomFacebook}
          onPress={facebookButton}>
          <SocialMedia style={styles.facebook} source={imagePath.facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomGoogle} onPress={googleButton}>
          <SocialMedia style={styles.googleImage} source={imagePath.google} />
        </TouchableOpacity>
      </View>

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

export default LoginPage;