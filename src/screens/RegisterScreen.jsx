import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import {userRegister} from '../redux/actions/userAction';
import color from '../constant/color';
import TextField from '../components/TextField';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <>
      <Text style={styles.headerText}>Register {'\n'}</Text>
      <View style={styles.textInput}>
        <Icon name="user" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Full Name"
          placeholderTextColor="black"
          value={fullName}
          onChangeText={val => setFullName(val)}
        />
      </View>

      <View style={styles.textInput}>
        <Icon name="mail" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={val => setEmail(val)}
        />
      </View>

      <View style={styles.textInput}>
        <Icon name="phone" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Mobile number"
          placeholderTextColor="black"
          value={mobileNumber}
          onChangeText={val => setMobileNumber(val)}
        />
      </View>

      <View style={styles.textInput}>
        <Icon name="key" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          color={color.primary}
          onPress={() => userRegisterDetails()}
        />
      </View>

      <Text style={styles.textContainer}>
        Already have an account?
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Login')}>
          Login here.
        </Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  textContainer: {
    textAlign: 'center',
    paddingTop: 120,
    fontSize: 16,
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
});
