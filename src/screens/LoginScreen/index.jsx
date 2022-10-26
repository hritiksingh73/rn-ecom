import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import color from '../../constant/color.js';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/action/Action.js';
import TextInputComponent from '../../components/TextInputComponent.js';
import styles from '../LoginScreen/styles.js';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);

  const updateLogin = () => {
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
      setEmail(''),
      setPassword(''),
    );
    navigation.navigate('Tab');
  };

  const validEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmailValid(reg.test(email) === true ? '' : 'Wrong email');
  };

  const validPassword = () => {
    var Regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    setPasswordValid(
      Regex.test(password) === true ? '' : 'Enter a valid password',
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/grocery.png')}
        style={styles.groceryImage}
      />
      <Text style={styles.welcome}>Welcome Back!</Text>
      <View style={styles.input}>
        <Icon name="mail" size={20} />
        <TextInputComponent
          placeholder="Email"
          style={styles.placeholder}
          value={email}
          onBlur={validEmail}
          autoCapitalize="words"
          onChangeText={val => setEmail(val)}
        />
      </View>
      <Text style={styles.error}>{emailValid}</Text>
      <View style={styles.input}>
        <Icon name="key" size={20} />
        <TextInputComponent
          placeholder="Password"
          value={password}
          style={styles.placeholder}
          secureTextEntry={true}
          onBlur={validPassword}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <Text style={styles.error}>{passwordValid}</Text>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <View style={styles.login}>
        <Button title={'Login'} color="limegreen" onPress={updateLogin} />
      </View>
      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.continuewith}>Continue With</Text>
      <View style={styles.button}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/facebook.png')}
            style={styles.facebook}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/logingooglebtn.png')}
              style={styles.google}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.register}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
