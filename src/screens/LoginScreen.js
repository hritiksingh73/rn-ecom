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
import Color from '../redux/constants/Color';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../redux/action/Action';
import TextInputComponent from '../components/TextInputComponent';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);

  const Final = () => {
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
    );
    navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/grocery.png')}
        style={styles.grcryimage}
      />
      <Text style={styles.wlcm}>Welcome Back!</Text>
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
        <Icon name="key" size={20} />
        <TextInputComponent
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <View style={styles.login}>
        <Button title={'Login'} color="limegreen" onPress={Final} />
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
            source={require('../Assets/facebook.png')}
            style={styles.facebook}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../Assets/logingooglebtn.png')}
              style={styles.google}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.register}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  grcryimage: {
    width: 200,
    height: 50,
    marginTop: 40,
  },
  wlcm: {
    margin: 20,
    fontSize: 20,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'green',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    margin: 10,
    width: 350,
  },
  forgot: {
    color: 'green',
    fontSize: 15,
    padding: 10,
  },
  login: {
    margin: 10,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    margin: 5,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    padding: 30,
  },
  facebook: {
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 10,
    paddingTop: 20,
  },
  google: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 2,
    paddingTop: 20,
    height: 42,
    width: 140,
    borderWidth: 1,
    marginLeft: 15,
  },
  account: {
    marginTop: 10,
    fontSize: 15,
  },
  register: {
    marginTop: 10,
    color: Color.primary,
    fontSize: 15,
  },
});

export default LoginScreen;
