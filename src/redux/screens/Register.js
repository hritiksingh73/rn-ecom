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
import {registerUser} from '../action/Action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import TabNav from './TabNav';
import { green, white } from '../../constant/Color';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [registeremail, setRegisterEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.contaienr}>
        <View style={styles.userDetails}>
          <Icon name="user" size={24} />
          <TextInput
            placeholder="Full Name"
            autoCapitalize="words"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
      </View>

      <View style={styles.userDetails}>
        <Email name="email" size={24} />
        <TextInput
          placeholder="Email"
          autoCapitalize="words"
          onChangeText={text => setRegisterEmail(text)}
          value={registeremail}
        />
      </View>

      <View style={styles.userDetails}>
        <Icon name="mobile1" size={24} />
        <TextInput
          placeholder="Mobile Number"
          autoCapitalize="words"
          onChangeText={text => setCellNumber(text)}
          value={cellNumber}
        />
      </View>

      <View style={styles.userDetails}>
        <Icon name="key" size={24} />
        <TextInput
          placeholder="Password"
          autoCapitalize="words"
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

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
          <Text style={{color: 'green'}}>Login Here</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Explore Tab Navigation"
        onPress={() => navigation.navigate(TabNav)}
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
    borderRightColor: white,
    borderLeftColor: white,
    borderTopColor: white,
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
    color: white,
    height: 40,
    borderRadius: 10,
    width: 100,
    backgroundColor: green,

    textAlign: 'center',
  },
});

export default RegisterPage;
