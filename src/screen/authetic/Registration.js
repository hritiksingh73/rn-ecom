/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Textinput from '../../components/Textinput';
import {useDispatch} from 'react-redux';
import {updateReg} from '../../redux/action/action';
import Colors from '../../constants/Colors';
import auth from '@react-native-firebase/auth';

const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNo, setMobno] = useState('');
  const [password, setPassword] = useState('');
  const [isValidemail, setisValidemail] = useState(true);
  const [isPassValid, setisPassValid] = useState(true);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // for mail pattern
  const passRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; // for password

  const RegisterDetails = () => {
    const object = {fullName, email, mobNo, password};
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName: fullName,
        });
        console.log(email);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email  in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log(' email invalid!');
        }
        console.error(error);
      });
    dispatch(updateReg(object));
    console.log(object);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>Register</Text>
        <IconAntDesign style={styles.icon} name="left" size={25} />
      </View>

      <Textinput
        onChangeText={Name => setfullName(Name)}
        defaultValue={fullName}
      />

      <Text style={styles.field}>FullName</Text>
      <IconAntDesign style={styles.icontwo} name="user" size={25} />
      <Textinput
        onChangeText={Email => setEmail(Email)}
        defaultValue={email}
        onBlur={() => {
          setisValidemail(reg.test(email) === true ? '' : 'Incorrect email');
        }}
      />
      <Text style={styles.errorMsg}>{isValidemail}</Text>
      <Text style={styles.field}>Email</Text>
      <IconAntDesign style={styles.icontwo} name="mail" size={25} />
      <Textinput onChangeText={Mob => setMobno(Mob)} defaultValue={mobNo} />

      <Text style={styles.field}>Mobile No</Text>
      <IconAntDesign style={styles.icontwo} name="mobile1" size={25} />
      <Textinput
        onChangeText={pass => setPassword(pass)}
        defaultValue={password}
        secureTextEntry
        onBlur={() => {
          setisPassValid(
            passRegex.test(password) === true ? '' : 'NeedStrongPass',
          );
        }}
      />

      <Text style={styles.field}>Password</Text>
      <IconAntDesign style={styles.icontwo} name="key" size={25} />
      <View>
        <Text style={styles.errorMsgofPass}>{isPassValid}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => RegisterDetails()}>
          <Text style={styles.btnOne}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.log}>Already have an account?</Text>
      <TouchableOpacity
        style={styles.logtwo}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{color: 'rgb(112,192,59)', fontSize: 15, fontWeight: 'bold'}}>
          Login here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    top: '20%',
    right: '33%',
  },
  icon: {
    top: '2%',
    right: '35%',
  },
  field: {
    bottom: 225,
    right: 130,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'rgb(112,192,59)',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    top: -140,
  },
  log: {
    bottom: 60,
    fontSize: 15,
    fontWeight: 'bold',
    right: 20,
  },
  logtwo: {
    bottom: 78,
    left: 112,
  },
  icontwo: {
    bottom: 230,
    right: 165,
  },
  errorMsg: {
    color: 'red',
    bottom: '20%',
    right: '30%',
  },
  errorMsgofPass: {
    color: 'red',
    bottom: '380%',
    right: '30%',
  },
});
export default Registration;
