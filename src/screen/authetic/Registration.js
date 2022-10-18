/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Textinput from '../../components/Textinput';
import {useDispatch} from 'react-redux';
import {updateReg} from './../../redux/action/action';
const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNo, setMobno] = useState('');
  const [password, setPassword] = useState('');

  const update = () => {
    const object = {fullName, email, mobNo, password};
    dispatch(updateReg(object));
    //console.log(object)
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
      <Textinput onChangeText={Email => setEmail(Email)} defaultValue={email} />

      <Text style={styles.field}>Email</Text>
      <IconAntDesign style={styles.icontwo} name="mail" size={25} />
      <Textinput onChangeText={Mob => setMobno(Mob)} defaultValue={mobNo} />

      <Text style={styles.field}>Mobile No</Text>
      <IconAntDesign style={styles.icontwo} name="mobile1" size={25} />
      <Textinput
        onChangeText={pass => setPassword(pass)}
        defaultValue={password}
      />

      <Text style={styles.field}>Password</Text>
      <IconAntDesign style={styles.icontwo} name="key" size={25} />
      <View>
        <TouchableOpacity style={styles.btn} onPress={() => update()}>
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
    bottom: 225,
    right: 165,
  },
});
export default Registration;
