/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/action/action';
import auth from '@react-native-firebase/auth';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // for mail pattern
const passRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; // for password

const Login = ({navigation}) => {
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
    // eslint-disable-next-line no-lone-blocks
    {
      navigation.navigate('Home');
    }
    dispatch(updateUser(object));
    //console.log(object);
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.top}>
        <Image source={require('../../assests/grocery1.png')} />

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
      <Text style={{top: '10%', fontSize: 23, fontWeight: '500'}}>
        Continue with
      </Text>

      <TouchableOpacity style={{right: 100}}>
        <Text style={styles.design}>Facebook</Text>
        <Image
          style={styles.designThree}
          source={require('../../assests/facebook.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{top: 28, left: 90}}>
        <Text style={styles.designFour}>Google</Text>
        <Image
          style={styles.designFive}
          source={require('../../assests/google-logo.png')}
        />
      </TouchableOpacity>
      <Text style={styles.log}>Didn't have an account?</Text>
      <TouchableOpacity
        style={styles.logtwo}
        onPress={() => navigation.navigate('Registration')}>
        <Text
          style={{color: 'rgb(112,192,59)', fontSize: 15, fontWeight: 'bold'}}>
          Register Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  textDesign: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: '2%',
  },
  top: {
    bottom: '5%',
  },
  icon: {
    bottom: '620%',
    right: '44%',
  },
  iconTwo: {
    bottom: '12%',
    right: '45%',
  },
  iconThree: {
    bottom: '14%',
    left: '38%',
  },
  touchable: {
    bottom: '400%',
    color: 'rgb(119,193,78)',
  },
  btn: {
    backgroundColor: 'rgb(112,192,59)',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: 1,
  },
  or: {
    fontSize: 20,
    fontWeight: '400',
    top: '5%',
  },
  design: {
    fontSize: 20,
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(59,89,152)',
    paddingTop: 14,
    paddingLeft: 55,

    left: 15,
    paddingBottom: 14,

    paddingRight: 30,
    top: 130,
    // right:300
  },

  designThree: {
    top: 88,
    height: 30,
    width: 30,
    left: 35,
    // right:40
  },
  designFour: {
    fontSize: 18,
    fontWeight: '700',
    top: 20,
    backgroundColor: 'rgb(255,255,255)',
    paddingTop: 14,
    paddingLeft: 55,

    borderColor: 'rgb(210,210,210)',
    borderWidth: 2,
    paddingBottom: 14,

    paddingRight: 30,
  },
  designFive: {
    bottom: 23,
    height: 30,
    width: 30,
    left: 20,
  },
  textField: {
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '85%',
    top: '-2%',
    padding: '2%',
    margin: '3%',
  },
  log: {
    bottom: -60,
    fontSize: 15,
    fontWeight: 'bold',
    right: 40,
  },
  logtwo: {
    top: 42,
    left: 100,
  },
  errorMsg: {
    color: 'red',
    bottom: '3%',
    right: '30%',
    fontSize: 15,
  },
});
export default Login;
