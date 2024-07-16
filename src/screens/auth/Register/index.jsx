import React, {useState} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import LoginTextField from '../../../components/TextInputField';
import PrimaryButton from '../../../components/PrimaryButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ValidateEmail,
  ValidatePassword,
  ValidateName,
  ValidateNumber,
} from '../../../utils';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [isValidName, setIsValidName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidNumber, setIsValidNumber] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');
  const [cartItem, setCartItem] = useState([]);

  const firestoreHandler = () => {
    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(({user}) => {
        user.updateProfile({
          displayName: userName,
          phoneNumber: userNumber,
        });

        console.log('user', user);
        console.log('User account created & signed in!');

        // user details store in Users collection in firestore
        firestore().collection('Users').doc(user.uid).set({
          uid: user.uid,
          name: userName,
          email: userEmail,
          number: userNumber,
        });
        // Empty array of Document created in Cart collection in firestore
        // firestore().collection('Cart').doc('ABC').set({cartItem});
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
  };

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
        firestoreHandler();

        setUserName('');
        setUserEmail('');
        setUserNumber('');
        setUserPassword('');
      }
    }
  };

  const IsNameValidate = () => {
    ValidateName().test(userName)
      ? setIsValidName('')
      : setIsValidName('Invalid Name');
  };

  const IsEmailValidate = () => {
    ValidateEmail().test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Invalid Email');
  };

  const IsNumberValidate = () => {
    ValidateNumber().test(userNumber)
      ? setIsValidNumber('')
      : setIsValidNumber('Invalid Number');
  };

  const IsPasswordValidate = () => {
    ValidatePassword().test(userPassword)
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
              IsNameValidate();
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
              IsEmailValidate();
            }}
          />
          <LoginTextField
            icon="smartphone"
            placeholder="Mobile number"
            maxLength={14}
            value={userNumber}
            warrning={isValidNumber}
            onChangeText={val => {
              setUserNumber(val);
              IsNumberValidate();
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
              IsPasswordValidate();
            }}
          />

          <View style={styles.btnContainer}>
            <PrimaryButton name={'Register'} onPress={LoginHandler} />
          </View>

          <Text style={styles.footer}>
            <Text>Already have an account?</Text>
            <Text
              style={styles.loginHereTxt}
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
