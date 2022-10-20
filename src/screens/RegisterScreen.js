import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../redux/constants/Color';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../redux/action/Action';
import TextInputComponent from '../components/TextInputComponent';

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullnameError, setFullNameError] = useState('');
  const [mobilenoError, setMobileNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const register = useSelector(state => state.user.register);

  const complete = () => {
    dispatch(
      registerUser({
        fullname: fullname,
        email: email,
        password: password,
        mobileno: mobileno,
      }),
    );
    //navigation.navigate('HomeScreen');
  };

  const fullnameValidator = () => {
    if (fullname === '') {
      setFullNameError('fullname cannot be empty');
    } else {
      setFullNameError('');
    }
  };

  const emailValidator = () => {
    if (email === '') {
      setEmailError('email cannot be empty');
    } else {
      setEmailError('');
    }
  };

  const mobilenoValidator = () => {
    if (mobileno === '') {
      setMobileNoError('mobile must be 10 characters long');
    } else {
      setMobileNoError('');
    }
  };

  const passwordValidator = () => {
    if (password === '') {
      setPasswordError('password must be 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validator = () => {
    if (fullname == '' && email == '' && mobileno == '' && password == '') {
      alert('Incorrect information');
    } else navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="leftcircleo" size={20} />
      <Text style={styles.register}>Register</Text>
      <View style={styles.input}>
        <Icon name="user" size={20} />
        <TextInput
          placeholder="Full Name"
          value={fullname}
          style={styles.placeholder}
          autoCapitalize="words"
          onBlur={fullnameValidator}
          onChangeText={text => setFullName(text)}
        />
      </View>
      <Text style={styles.text}>{fullnameError}</Text>
      <View style={styles.input}>
        <Icon name="mail" size={20} />
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.placeholder}
          onBlur={emailValidator}
          autoCapitalize="words"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Text style={styles.text}>{emailError}</Text>
      <View style={styles.input}>
        <Icon name="phone" size={20} />
        <TextInput
          placeholder="Mobile No"
          value={mobileno}
          style={styles.placeholder}
          onBlur={mobilenoValidator}
          onChangeText={text => setMobileNo(text)}
        />
      </View>
      <Text style={styles.text}>{mobilenoError}</Text>
      <View style={styles.input}>
        <Icon name="key" size={20} />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.placeholder}
          autoCapitalize="words"
          onBlur={passwordValidator}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Text style={styles.text}>{passwordError}</Text>
      <View style={styles.button}>
        <Button
          title="Register"
          color="white"
          onPress={() => {
            complete();
            validator();
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.login}>Login here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
  },
  register: {
    fontSize: 20,
    margin: 10,
    marginLeft: 10,
    padding: 10,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },
  placeholder: {
    padding: 20,
    width: 320,
  },
  text: {
    marginRight: 180,
    color: 'red',
    padding: 10,
  },
  button: {
    width: 90,
    margin: 20,
    backgroundColor: Color.primary,
  },
  account: {
    marginTop: 10,
    fontSize: 15,
  },
  login: {
    marginTop: 10,
    color: Color.primary,
    fontSize: 15,
  },
});

export default RegisterScreen;
