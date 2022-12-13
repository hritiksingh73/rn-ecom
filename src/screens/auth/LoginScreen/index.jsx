import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {userFullInfo} from '../../../redux/action/Action.js';
import TextInputComponent from '../../../components/TextInputComponent.js';
import styles from '../LoginScreen/styles.js';
import image from '../../../config/Image.js';
import SocialMediaImage from '../../../components/SocialMediaImage.js';
import color from '../../../constant/color.js';
import LoginButton from '../../../components/LoginButton'
import {EmailValid, PasswordValid} from '../../../../src/utils/rejexValidate';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userRecord);

  const updateLogin = async () => {
    if (email === '' && password === '') {
      alert('Empty email and password');
    } else {
      try {
        const userRes = auth().signInWithEmailAndPassword(email, password);
        let userInfo = {
          email: email,
          password: password,
        };
        const res = dispatch(userFullInfo(userInfo));
      } catch (error) {}
    }
  };

  const validEmail = () => {
    EmailValid().test(email) ? setEmailValid('') : setEmailValid('Wrong Email');
  };

  const validPassword = () => {
    PasswordValid().test(password)
      ? setPasswordValid('')
      : setPasswordValid('Enter a Valid Password');
  };

  const facebook = () => {
    alert('Sign into facebook successfully ');
  };

  const google = () => {
    alert('Sign into google successfully ');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={image.grocery} style={styles.groceryImage} />
        <Text style={styles.welcome}>Welcome Back!</Text>
        <View style={styles.inputText}>
          <Icon name="mail" size={20} />
          <TextInputComponent
            placeholder="Email"
            style={styles.placeholderInput}
            value={email}
            onBlur={validEmail}
            autoCapitalize="words"
            onChangeText={val => setEmail(val)}
          />
        </View>
        <Text style={styles.error}>{emailValid}</Text>
        <View style={styles.inputText}>
          <Icon name="key" size={20} />
          <TextInputComponent
            placeholder="Password"
            value={password}
            style={styles.placeholderInput}
            secureTextEntry={true}
            onBlur={validPassword}
            onChangeText={val => setPassword(val)}
          />
        </View>
        <Text style={styles.error}>{passwordValid}</Text>
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View style={styles.login}>
          <LoginButton name='Login' onPress={updateLogin} />
        </View>
        <View style={styles.or}>
          <View style={styles.line} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.line} />
        </View>
        <Text style={styles.continuewith}>Continue With</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={facebook}>
            <SocialMediaImage source={image.facebook} style={styles.facebook} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={google}>
              <SocialMediaImage
                source={image.googlebtn}
                style={styles.google}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomLine}>
          <Text style={styles.account}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
