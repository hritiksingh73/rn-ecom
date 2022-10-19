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
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {updateUser} from './../../redux/action/action';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const object = {mail, pass};
  const updateLogin = () => {
    dispatch(updateUser(object));

    //console.log(object)
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.top}>
        <Image source={require('../../assests/grocery1.png')} />

        <Text style={styles.textDesign}>Welcome back!</Text>
      </View>

      <TextInput
        style={styles.textfield}
        placeholder="Email"
        placeholderTextColor={'black'}
        onChangeText={Name => setmail(Name)}
        defaultValue={mail}
      />
      <TextInput
        style={styles.textfield}
        placeholder="Password"
        placeholderTextColor={'black'}
        onChangeText={val => setpass(val)}
        defaultValue={pass}
      />

      <View>
        <IconAntDesign style={styles.icon} name="mail" size={25} />
      </View>
      <IconAntDesign style={styles.icontwo} name="key" size={25} />
      <IconAntDesign style={styles.iconthree} name="eye" size={25} />
      <TouchableOpacity>
        <Text style={styles.touchable}>Forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnOne}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <Text style={{top: '10%', fontSize: 23, fontWeight: '500'}}>
        Continue with
      </Text>

      <TouchableOpacity style={{right: 100}}>
        <Text style={styles.design}>Facebook</Text>
        <Image
          style={styles.DesignThree}
          source={require('../../assests/facebook.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{top: 28, left: 90}}>
        <Text style={styles.DesignFour}>Google</Text>
        <Image
          style={styles.DesignFive}
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
    backgroundColor: 'rgb(255,255,255)',
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
    bottom: '485%',
    right: '44%',
  },
  icontwo: {
    bottom: '10%',
    right: '45%',
  },
  iconthree: {
    bottom: '12%',
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

  DesignThree: {
    top: 88,
    height: 30,
    width: 30,
    left: 35,
    // right:40
  },
  DesignFour: {
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
  DesignFive: {
    bottom: 23,
    height: 30,
    width: 30,
    left: 20,
  },
  textfield: {
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
});
export default Login;
