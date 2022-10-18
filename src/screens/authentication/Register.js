import React, { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import LoginTextField from '../../components/LoginTextField';
import HomeBtn from '../../components/HomeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { registerDetails } from '../../redux/action/action';

const Register = ({navigation}) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();
  const registerData = useSelector(state => state.user.registerData);


  const FilterData = (placeholder, userData, page) => {
    if(page === "Register"){
        if(placeholder === "Full Name"){
          setUserName(userData)
        }
        if(placeholder === "Email"){
          setUserEmail(userData)
        }
        if(placeholder === "Mobile number"){
          setUserNumber(userData)
        }
        if(placeholder === "Password"){
          setUserPassword(userData)
        }
    }
}

const LoginHandler = () => {
  // console.log(":::::::::",userName)
  dispatch(registerDetails( userName, userEmail, userNumber, userPassword ))
  setUserName('')
  setUserEmail('')
  setUserNumber('')
  setUserPassword('')
}

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Register</Text>

          <LoginTextField placeholder={'Full Name'} icon={'user'} FilterData={FilterData} page={"Register"}/>
          <LoginTextField placeholder={'Email'} icon={'mail'} FilterData={FilterData} page={"Register"}/>
          <LoginTextField placeholder={'Mobile number'} icon={'smartphone'} FilterData={FilterData} page={"Register"}/>
          <LoginTextField placeholder={'Password'} icon={'key'} FilterData={FilterData} page={"Register"}/>

          <HomeBtn name={'Register'} LoginHandler={LoginHandler}/>

          <Text style={styles.footer}>
            <Text onPress={() => {console.log(registerData)}}>Already have an account?</Text>
            <Text
              style={{color: '#70c03b'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              Login here.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '8%',
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    marginVertical: '4%',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: '60%',
  },
});

export default Register;
