import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LoginTextField from '../../components/LoginTextField';
import HomeBtn from '../../components/HomeBtn';
import {useDispatch, useSelector} from 'react-redux';
import {loginDetails} from '../../redux/action/action';

const Login = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();
  const loginData = useSelector(state => state.user.loginData);
  const registerData = useSelector(state => state.user.registerData);

  const FilterData = (placeholder, userData, page) => {
    if (page === 'Login') {
      if (placeholder === 'Email') {
        setUserEmail(userData);
      }
      if (placeholder === 'Password') {
        setUserPassword(userData);
      }
    }
  };

  //for login data save on redux
  // const LoginHandler = () => {
  //   dispatch(loginDetails(userEmail, userPassword));
  //   setUserEmail('');
  //   setUserPassword('');
  // };

  const isValidate = () => {
    for (let i = 0; i < registerData.length; i++) {
      if (
        registerData[i].Email === userEmail &&
        registerData[i].Password === userPassword
      ) {
        navigation.navigate('Redirecr_Home');
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.headerImg}
              source={require('../../assets/images/Grocery.jpg')}
            />
          </View>

          <Text style={styles.headerfnt}>Welcome back!</Text>

          <LoginTextField
            placeholder={'Email'}
            icon={'mail'}
            FilterData={FilterData}
            page={'Login'}
          />
          <LoginTextField
            placeholder={'Password'}
            icon={'key'}
            FilterData={FilterData}
            page={'Login'}
            secureTxt={true}
          />

          <TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* <HomeBtn name={'Login'} LoginHandler={LoginHandler}/> */}
          <HomeBtn name={'Login'} isValidate={isValidate} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.orTxtRow}> __________________ </Text>
            <Text style={styles.orTxt}>OR</Text>
            <Text style={styles.orTxtRow}> __________________ </Text>
          </View>

          <Text style={styles.headerfnt}>Continue with</Text>

          <View style={styles.imgContainer}>
            <Image
              style={[styles.fbGoogleBtn, {marginRight: 6}]}
              source={require('../../assets/images/facebook.jpg')}
            />
            <Image
              style={[styles.fbGoogleBtn, {marginLeft: 6}]}
              source={require('../../assets/images/google.jpg')}
            />
          </View>

          <Text style={styles.footerTxt}>
            <Text>Dont't have an account?</Text>
            <Text
              style={{color: '#70c03b'}}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              {' '}
              Register here.
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
  headerImg: {
    marginTop: '15%',
    marginBottom: '2%',
  },
  headerfnt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  forgotTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#70c03b',
    fontWeight: '500',
  },
  orTxtRow: {
    // flex: 5,
    width: '43%',
    textAlign: 'center',
    color: '#bfbfbf',
    marginTop: '4%',
    marginBottom: '8%',
  },
  orTxt: {
    // flex: 1,
    width: '8%',
    textAlign: 'center',
    fontSize: 18,
    color: 'Black',
    marginHorizontal: 10,
    marginTop: '4%',
    marginBottom: '8%',
  },
  footerTxt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '10%',
  },
  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: '12%',
  },
  fbGoogleBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 3,
  },
});

export default Login;
