import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';

import {registerUser} from '../redux/action/Action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import TabNav from './TabNav';
import {Color} from '../constant/Color';
import SuperFresh from './SuperFresh';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [registeremail, setRegisterEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorname, setErrorName] = useState('');
  const [errorregisteremail, setErrorRegisterEmail] = useState('');
  const [errorcellNumber, setErrorCellNumber] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const nameValidator = () => {
    if (name == '') {
      setErrorName('Name Should not contain Special Character ');
    } else {
      setErrorName('');
    }
  };
  const emailValidator = () => {
    if (registeremail == '') {
      setErrorRegisterEmail('email cannot be empty');
    } else {
      setEmailError('');
    }
  };
  const contactValidator = () => {
    if (cellNumber == '') {
      setErrorCellNumber('field should not be Empty ');
    } else {
      setErrorCellNumber('');
    }
  };
  const passwordValidator = () => {
    if (password == '') {
      setErrorPassword('email cannot be empty');
    } else {
      setErrorPassword('');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.contaienr}>
        <View style={styles.userDetails}>
          <Icon name="user" size={24} />
          <TextInput
            placeholder="Full Name"
            autoCapitalize="words"
            onChangeText={text => setName(text)}
            onBlur={() => nameValidator()}
            value={name}
          />
        </View>
      </View>
      <Text style={{color: Color.red}}>{errorname}</Text>

      <View style={styles.userDetails}>
        <Email name="email" size={24} />
        <TextInput
          placeholder="Email"
          autoCapitalize="words"
          onChangeText={text => setRegisterEmail(text)}
          onBlur={() => contactValidator()}
          value={registeremail}
        />
      </View>
      <Text style={{color: Color.red}}>{errorregisteremail}</Text>
      <View style={styles.userDetails}>
        <Icon name="mobile1" size={24} />
        <TextInput
          placeholder="Mobile Number"
          autoCapitalize="words"
          onChangeText={text => setCellNumber(text)}
          onBlur={() => emailValidator()}
          value={cellNumber}
        />
      </View>
      <Text style={{color: Color.red}}>{errorcellNumber}</Text>

      <View style={styles.userDetails}>
        <Icon name="key" size={24} />
        <TextInput
          placeholder="Password"
          autoCapitalize="words"
          onChangeText={text => setPassword(text)}
          onBlur={() => passwordValidator()}
          value={password}
        />
      </View>
      <Text style={{color: Color.red}}>{errorpassword}</Text>

      <TouchableOpacity
        style={styles.registerButtonContainer}
        onPress={() => {
          dispatch(registerUser(name, registeremail, cellNumber, password));
        }}>
        <Text style={styles.registerButton}>Register</Text>
      </TouchableOpacity>

      <View style={styles.bottomHeadline}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{color: Color.green}}>Login Here</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Explore Tab Navigation"
        onPress={() => navigation.navigate("Super_Fresh")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    paddingTop: 10,
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 350,
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
    paddingTop: 40,
  },
  bottomHeadline: {
    paddingTop: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  registerButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  registerButton: {
    fontSize: 20,
    color: Color.white,
    height: 40,
    borderRadius: 10,
    width: 100,
    backgroundColor: Color.white,

    textAlign: 'center',
  },
});

export default RegisterPage;
