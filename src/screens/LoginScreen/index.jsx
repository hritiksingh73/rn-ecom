import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import color from '../../constant/color';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userInfoDetails} from '../../redux/actions/userAction';
import ImageBtn from '../../components/ImageBtn';
import Icon from 'react-native-vector-icons/AntDesign';
import TxtComponent from '../../components/TxtComponent';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDataReducer.userDetails);

  const loginBtnHandler = async () => {
    try {
      const userRes = await auth().signInWithEmailAndPassword(email, password);

      let userInfo = {
        uid: userRes.user.uid,
        email: email,
      };
      const reduxRes = dispatch(userInfoDetails(userInfo));
    } catch (error) {
      console.error(error.code);
    }
  };

  validateEmail = email => {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };
  validatePassword = password => {
    var re =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(password);
  };

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({emailError: 'please enter a valid email'})
      : setValidation({emailError: ''});
  };
  const passwordValidator = () => {
    password == '' || !validatePassword(password)
      ? setValidation({
          passwordError: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({passwordError: ''});
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <View style={styles.headerImage}>
          <Image source={require('../../assets/grocery.png')} />
          <Text style={[styles.textStyle]}>Welcome back!</Text>
        </View>

        <View style={styles.textInput}>
          <Icon name="mail" size={20} style={{marginLeft: 30}} />
          <TextField
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onBlur={() => emailValidator()}
            onChangeText={val => setEmail(val)}
          />
        </View>
        <TxtComponent>{validation.emailError}</TxtComponent>

        <View style={styles.textInput}>
          <Icon name="key" size={20} style={{marginLeft: 30}} />
          <TextField
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onBlur={() => passwordValidator()}
            onChangeText={val => setPassword(val)}
            secureTextEntry={true}
            maxLength={9}
          />
        </View>
        <TxtComponent>{validation.passwordError}</TxtComponent>
        <Text style={styles.forgotStyle}>Forgot Password?</Text>

        <ButtonComponent
          style={{backgroundColor: color.primary}}
          onPress={() => loginBtnHandler()}
          disabled={
            !validateEmail(email) || !validatePassword(password) ? true : false
          }>
          <Text>Login</Text>
        </ButtonComponent>

        <View style={styles.orImage}>
          <Image source={require('../../assets/or.png')} />
          <Text style={styles.textStyle}>Continue with</Text>
        </View>

        <ImageBtn />

        <View style={styles.accountText}>
          <Text style={styles.textStyle}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.textStyle, {color: color.primary}]}>
              Register here.
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;
