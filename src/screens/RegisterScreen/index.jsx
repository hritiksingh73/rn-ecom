import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {addUser} from '../../redux/action/Action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import FormContainer from '../../reUsable/FormInput';
import auth from '@react-native-firebase/auth';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [registeremail, setRegisterEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [validation, setValidation] = useState({
    errorname: '',
    errorregisteremail: '',
    errorcellNumber: '',
    errorpassword: '',
  });
  // const registerUserDetails = () => {
  //   auth()
  // .createUserWithEmailAndPassword(registeremail, password)
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });
  //   // dispatch(registerUser(name, registeremail, cellNumber, password));
  // };
  const registerUserDetails = async () => {
    try {
      const userRes =  auth().createUserWithEmailAndPassword(
        registeremail,
        password,
        name,
        cellNumber
      );
      await userRes.user.updateProfile({
        displayName:name,
        email:registeremail,
        phoneNumber:cellNumber,
      });
      //dispatch(addUser(userRes.user.displayName, userRes.user.email,  userRes.user.phoneNumber));
      console.log("userRes=======>>", userRes);
    } catch (error) {
      console.error(error.code);
    }
  };

  const nameValidator = () => {
    name == ''
      ? setValidation({
          setErrorName: 'Name Should not contain Special Character ',
        })
      : setValidation({setErrorName: ''});
  };
  const emailValidator = registeremail => {
    var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regx.test(registeremail);
  };
  const contactValidator = cellNumber => {
    var regx = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
    return regx.test(cellNumber);
  };
  const passwordValidator = password => {
    var regx =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return regx.test(password);
  };

  const validatorEmail = () => {
    registeremail == '' || !emailValidator(registeremail)
      ? setValidation({errorregisteremail: 'please enter a valid email'})
      : setValidation({errorregisteremail: ''});
  };
  const validatorMobile = () => {
    cellNumber == '' || !contactValidator(cellNumber)
      ? setValidation({errorcellNumber: 'please enter a valid mobile number'})
      : setValidation({errorcellNumber: ''});
  };
  const validatorPassword = () => {
    password == '' || !passwordValidator(password)
      ? setValidation({
          errorpassword: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({errorpassword: ''});
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.contaienr}>
          <View style={styles.userDetails}>
            <Icon name="user" size={24} />

            <FormContainer
              placeholder="Full Name"
              autoCapitalize="words"
              onChangeText={text => setName(text)}
              onBlur={() => nameValidator()}
              value={name}
            />
          </View>
        </View>
        <Text style={styles.errormsg}>{validation.errorname}</Text>

        <View style={styles.userDetails}>
          <Email name="email" size={24} />
          <FormContainer
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="words"
            onChangeText={text => setRegisterEmail(text)}
            onBlur={() => validatorEmail()}
            value={registeremail}
          />
        </View>
        <Text style={styles.errormsg}>{validation.errorregisteremail}</Text>
        <View style={styles.userDetails}>
          <Icon name="mobile1" size={24} />
          <FormContainer
            keyboardType="phone-pad"
            placeholder="Mobile Number"
            autoCapitalize="words"
            onChangeText={text => setCellNumber(text)}
            onBlur={() => validatorMobile()}
            value={cellNumber}
          />
        </View>
        <Text style={styles.errormsg}>{validation.errorcellNumber}</Text>

        <View style={styles.userDetails}>
          <Icon name="key" size={24} />
          <FormContainer
            placeholder="Password"
            autoCapitalize="words"
            onChangeText={text => setPassword(text)}
            onBlur={() => validatorPassword()}
            value={password}
          />
        </View>
        <Text style={styles.errormsg}>{validation.errorpassword}</Text>

        <TouchableOpacity
          style={styles.registerButtonContainer}
          onPress={() => registerUserDetails()}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>

        <View style={styles.bottomHeadline}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginButton}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default RegisterPage;
