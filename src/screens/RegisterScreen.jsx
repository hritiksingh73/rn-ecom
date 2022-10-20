import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {userRegister} from '../redux/actions/userAction';
import color from '../constant/color';
import TextField from '../components/TextField';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import TxtComponent from '../components/TxtComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';

export default function RegisterScreen() {
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

  const registerDetails = useSelector(state => state.reducer.registerDetails);

  const userRegisterDetails = () => {
    dispatch(
      userRegister({
        fullName: fullName,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
      }),
    );
  };
  const nameValidator = () => {
    fullName == ''
      ? setValidation({nameError: 'please enter your name'})
      : setValidation({nameError: ''});
  };
  const emailValidator = () => {
    email == ''
      ? setValidation({emailError: 'please enter your email id'})
      : setValidation({emailError: ''});
  };
  const mobileValidator = () => {
    mobileNumber == ''
      ? setValidation({mobileError: 'please enter your mobile number'})
      : setValidation({mobileError: ''});
  };
  const passwordValidator = () => {
    password == ''
      ? setValidation({passwordError: 'please enter your password'})
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

      <ButtonComponent style={{backgroundColor: color.primary}}>
        <Text onPress={() => userRegisterDetails()()}>Register</Text>
      </ButtonComponent>

      <View style={styles.accountText}>
        <Text style={styles.textStyle}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textStyle, styles.loginText]}>Login here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 20,
  },
  loginText: {
    color: color.primary,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
  },
  accountText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '8%',
    marginHorizontal: '13%',
    paddingTop: '20%',
  },
});
