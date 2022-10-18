import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TextField from '../components/TextField';
import ButtonComponent from '../components/ButtonComponent';
import color from '../constant/color';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../redux/actions/userAction';
import ImageBtn from '../components/ImageBtn';
import Icon from 'react-native-vector-icons/AntDesign';

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginDetails = useSelector(state => state.reducer.loginDetails);

  const userLoginDetails = () => {
    dispatch(userLogin({email: email, password: password}));
    navigation.navigate('Grocery');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerImage}>
        <Image source={require('../assets/grocery.png')} />
        <Text style={styles.textStyle}>Welcome back!</Text>
      </View>

      <View style={styles.textInput}>
        <Icon name="mail" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={val => {
            setEmail(val);
          }}
        />
      </View>
      <View style={styles.textInput}>
        <Icon name="key" size={20} style={{marginLeft: 30}} />
        <TextField
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={val => {
            setPassword(val);
          }}
        />
      </View>
      <Text style={styles.forgotStyle}>Forgot Password?</Text>

      <View>
        <ButtonComponent style={{backgroundColor: color.primary}}>
          <Text onPress={() => userLoginDetails()}>Login</Text>
        </ButtonComponent>
      </View>

      <View style={styles.orImage}>
        <Image source={require('../assets/or.png')} />
        <Text style={styles.textStyle}>Continue with</Text>
      </View>

      <ImageBtn />

      <Text style={styles.accountText}>
        Don't have an account?
        <Text
          style={styles.forgotStyle}
          onPress={() => navigation.navigate('Register')}>
          Register here.
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerImage: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
  },
  forgotStyle: {
    textAlign: 'center',
    color: color.primary,
    fontSize: 16,
    marginTop: 24,
  },
  orImage: {
    alignItems: 'center',
    paddingTop: 25,
  },
  accountText: {
    paddingTop: 30,
    fontSize: 16,
    textAlign: 'center',
  },
});
