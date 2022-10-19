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
    navigation.navigate('Cart');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Assets/register.png')} style={styles.image} />
      <Text style={styles.register}>Register</Text>
      <View style={styles.input}>
        <Icon name="user" size={20} />
        <TextInputComponent
          placeholder="Full Name"
          value={fullname}
          autoCapitalize="words"
          onChangeText={text => setFullName(text)}
        />
      </View>
      <View style={styles.input}>
        <Icon name="mail" size={20} />
        <TextInputComponent
          placeholder="Email"
          value={email}
          autoCapitalize="words"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.input}>
        <Icon name="phone" size={20} />
        <TextInputComponent
          placeholder="Mobile No"
          value={mobileno}
          onChangeText={text => setMobileNo(text)}
        />
      </View>
      <View style={styles.input}>
        <Icon name="key" size={20} />
        <TextInputComponent
          placeholder="Password"
          value={password}
          autoCapitalize="words"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Register" color="limegreen" onPress={complete} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    padding: 20,
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
    margin: 25,
    width: 350,
  },
  button: {
    width: 90,
    margin: 20,
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
