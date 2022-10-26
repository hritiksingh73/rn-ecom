import React, {useState} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import LoginTextField from '../../../components/textInputField';
import LoginBtn from '../../../components/loginBtn';
import {useDispatch} from 'react-redux';
import {registerDetails} from '../../../redux/action/action';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [isValidName, setIsValidName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidNumber, setIsValidNumber] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');

  const dispatch = useDispatch();

  const LoginHandler = () => {
    dispatch(registerDetails(userName, userEmail, userNumber, userPassword));
    setUserName('');
    setUserEmail('');
    setUserNumber('');
    setUserPassword('');
    // navigation.navigate('Redirecr_Home');
  };

  const ValidateName = () => {
    /^[a-zA-Z\-]+$/.test(userName)
      ? setIsValidName('')
      : setIsValidName('Invalid Name');
  };

  const ValidateEmail = () => {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Invalid Email');
  };
  
  const ValidateNumber = () => {
    /^[0]?[789]\d{9}$/.test(userNumber)
      ? setIsValidNumber('')
      : setIsValidNumber('Invalid Number');
  };

  const ValidatePassword = () => {
    /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(userPassword)
      ? setIsValidPassword('')
      : setIsValidPassword('Enter Strong Password');
  };
  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Register</Text>

          <LoginTextField
            icon="user"
            placeholder="Full Name"
            maxLength={20}
            value={userName}
            onBlur={ValidateName}
            warrning={isValidName}
            onChangeText={val => setUserName(val)}
          />
          <LoginTextField
            icon="mail"
            placeholder="Email"
            maxLength={40}
            value={userEmail}
            onBlur={ValidateEmail}
            warrning={isValidEmail}
            onChangeText={val => setUserEmail(val)}
          />
          <LoginTextField
            icon="smartphone"
            placeholder="Mobile number"
            maxLength={16}
            value={userNumber}
            onBlur={ValidateNumber}
            warrning={isValidNumber}
            // keyboardType='phone-pad'
            onChangeText={val => setUserNumber(val)}
          />
          <LoginTextField
            icon="key"
            rightIcon="eye"
            placeholder="Password"
            maxLength={10}
            value={userPassword}
            secureTextEntry={true}
            onBlur={ValidatePassword}
            warrning={isValidPassword}
            onChangeText={val => setUserPassword(val)}
          />

          <LoginBtn name={'Register'} onPress={LoginHandler} />

          <Text style={styles.footer}>
            <Text>Already have an account?</Text>
            <Text
              style={{color: '#70c03b'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              Login here.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
