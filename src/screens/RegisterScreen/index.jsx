import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {userInfoDetails} from '../../redux/actions/userAction';
import color from '../../constant/color';
import TextField from '../../components/TextField';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import TxtComponent from '../../components/TxtComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../../components/ButtonComponent';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    nameError: '',
    emailError: '',
    mobileError: '',
    passwordError: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const userDetails = useSelector(state => state.userDataReducer.userDetails);

  const registerBtnHandler = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName: fullName,
        });
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    let userInfo = {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,
    };
    const reduxRes = dispatch(userInfoDetails(userInfo));
  };
  const nameValidator = () => {
    fullName == ''
      ? setValidation({nameError: 'please enter your name'})
      : setValidation({nameError: ''});
  };
  validateEmail = email => {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };
  validatePhNumber = mobileNumber => {
    var re = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
    return re.test(mobileNumber);
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
  const mobileValidator = () => {
    mobileNumber == '' || !validatePhNumber(mobileNumber)
      ? setValidation({mobileError: 'please enter a valid mobile number'})
      : setValidation({mobileError: ''});
  };
  const passwordValidator = () => {
    password == '' || !validatePassword(password)
      ? setValidation({
          passwordError: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({passwordError: ''});
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Register {'\n'}</Text>
      <View style={styles.textInput}>
        <Icon name="user" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Full Name"
          placeholderTextColor="black"
          value={fullName}
          onBlur={() => nameValidator()}
          onChangeText={val => setFullName(val)}
        />
      </View>
      <TxtComponent>{validation.nameError}</TxtComponent>

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
        <Icon name="phone" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Mobile number"
          placeholderTextColor="black"
          value={mobileNumber}
          onBlur={() => mobileValidator()}
          onChangeText={val => setMobileNumber(val)}
        />
      </View>
      <TxtComponent>{validation.mobileError}</TxtComponent>

      <View style={styles.textInput}>
        <Icon name="key" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          secureTextEntry={true}
          maxLength={9}
          onBlur={() => passwordValidator()}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <TxtComponent>{validation.passwordError}</TxtComponent>

      <ButtonComponent
        style={{backgroundColor: color.primary}}
        onPress={() => registerBtnHandler()}
        disabled={
          fullName == '' ||
          !validateEmail(email) ||
          !validatePassword(password) ||
          !validatePhNumber(mobileNumber)
            ? true
            : false
        }>
        <Text>Register</Text>
      </ButtonComponent>

      <View style={styles.accountText}>
        <Text style={styles.textStyle}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textStyle, styles.loginText]}>Login here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
