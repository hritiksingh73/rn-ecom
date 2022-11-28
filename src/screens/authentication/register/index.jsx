import React, {useState} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import LoginTextField from '../../../components/textInputField';
import LoginBtn from '../../../components/loginBtn';
import {useDispatch, useSelector} from 'react-redux';
import {registerDetails, UserId} from '../../../redux/action/action';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
  const userID = useSelector(state => state.user.userID);

  const LoginHandler = async () => {
    if (
      userName === '' ||
      userEmail === '' ||
      userNumber === '' ||
      userPassword === ''
    ) {
      alert('please enter above details');
    } else {
      if (
        isValidName != '' ||
        isValidEmail != '' ||
        isValidNumber != '' ||
        isValidPassword != ''
      ) {
        alert('please enter currect info.');
      } else {
        auth()
          .createUserWithEmailAndPassword(userEmail, userPassword)
          .then(({user, additionalUserInfo}) => {
            user.updateProfile({
              displayName: userName,
            })
            // firebase userid store in reducer
            dispatch(UserId(user.uid))
            console.log('User account created & signed in!');

            firestore()
              .collection('Praveen')
              .doc(user.uid)
              .set({
                name: userName,
                email: userEmail,
              })
              .then(() => {
                console.log('User added!', userID);
            });
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

        dispatch(
          registerDetails(userName, userEmail, userNumber, userPassword),
        );
        setUserName('');
        setUserEmail('');
        setUserNumber('');
        setUserPassword('');
      }
    }
  };

  const ValidateName = () => {
    /^[a-zA-Z ]+$/.test(userName)
      ? setIsValidName('')
      : setIsValidName('Invalid Name');
  };

  const ValidateEmail = () => {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Invalid Email');
  };

  const ValidateNumber = () => {
    // /^[0]?[789]\d{9}$/.test(userNumber)
    /^[789]\d{8}$/.test(userNumber)
      ? setIsValidNumber('')
      : setIsValidNumber('Invalid Number');
  };

  const ValidatePassword = () => {
    /^[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(userPassword)
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
            maxLength={25}
            value={userName}
            warrning={isValidName}
            onChangeText={val => {
              setUserName(val);
              ValidateName();
            }}
          />
          <LoginTextField
            icon="mail"
            placeholder="Email"
            maxLength={40}
            value={userEmail}
            warrning={isValidEmail}
            onChangeText={val => {
              setUserEmail(val);
              ValidateEmail();
            }}
          />
          <LoginTextField
            icon="smartphone"
            placeholder="Mobile number"
            maxLength={14}
            value={userNumber}
            warrning={isValidNumber}
            // keyboardType='phone-pad'
            onChangeText={val => {
              setUserNumber(val);
              ValidateNumber();
            }}
          />
          <LoginTextField
            icon="key"
            rightIcon="eye"
            placeholder="Password"
            maxLength={16}
            value={userPassword}
            secureTextEntry={true}
            warrning={isValidPassword}
            onChangeText={val => {
              setUserPassword(val);
              ValidatePassword();
            }}
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
