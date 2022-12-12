import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../redux/action/action';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // for mail pattern
const passRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; // for password

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [isValidemail, setisValidemail] = useState(true);
  const [isPassValid, setisPassValid] = useState(true);

  const updateLogin = () => {
    const object = {mail, pass};
    try {
      const Response = auth().signInWithEmailAndPassword(mail, pass);
      console.log('Login user ++> ', Response);
    } catch (error) {
      console.error(error.code);
    }

    dispatch(updateUser(object));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.top}>
        <Image source={require('../../../assests/grocery1.png')} />

        <Text style={styles.textDesign}>Welcome back!</Text>
      </View>

      <TextInput
        style={styles.textField}
        placeholder="Email"
        placeholderTextColor={'black'}
        onChangeText={Name => setmail(Name)}
        defaultValue={mail}
        onBlur={() => {
          setisValidemail(reg.test(mail) === true ? '' : 'Incorrect email');
        }}
      />
      <Text style={styles.errorMsg}>{isValidemail}</Text>

      <TextInput
        style={styles.textField}
        placeholder="Password"
        placeholderTextColor={'black'}
        onChangeText={val => setpass(val)}
        defaultValue={pass}
        onBlur={() => {
          setisPassValid(passRegex.test(pass) === true ? '' : 'NeedStrongPass');
        }}
      />
      <Text style={styles.errorMsg}>{isPassValid}</Text>

      <View>
        <IconAntDesign style={styles.icon} name="mail" size={25} />
      </View>
      <IconAntDesign style={styles.iconTwo} name="key" size={25} />
      <IconAntDesign style={styles.iconThree} name="eye" size={25} />
      <TouchableOpacity>
        <Text style={styles.touchable}>Forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => updateLogin()}>
        <Text style={styles.btnOne}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.text}>Continue with</Text>

      <TouchableOpacity style={styles.position}>
        <Text style={styles.design}>Facebook</Text>
        <Image
          style={styles.designThree}
          source={require('../../../assests/facebook.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.googlePosition}>
        <Text style={styles.designFour}>Google</Text>
        <Image
          style={styles.designFive}
          source={require('../../../assests/google-logo.png')}
        />
      </TouchableOpacity>
      <Text style={styles.log}>Didn't have an account?</Text>
      <TouchableOpacity
        style={styles.logtwo}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.textRegister}>Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
