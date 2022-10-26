import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import LoginTextField from '../../../components/textInputField';
import LoginBtn from '../../../components/loginBtn';

const Login = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');

  const dispatch = useDispatch();
  const registerData = useSelector(state => state.user.registerData);

  const isValidate = () => {
    for (let i = 0; i < registerData.length; i++) {

      if ( registerData[i].Email === userEmail ){
          if (registerData[i].Password === userPassword){
            alert('Login successfully')
            navigation.navigate('Redirecr_Home');
          }
          else{
            alert('wrong password')
          }
      }
    }
  };

  const ValidateEmail = () => {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Enter valid Email');
  };

  const ValidatePassword = () => {
    /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(userPassword)
      ? setIsValidPassword('')
      : setIsValidPassword('Enter valid Password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cntrItm}>
          <Image
            style={styles.headerImg}
            source={require('../../../assets/images/Grocery.jpg')}
          />
        </View>
        <Text style={styles.headerfnt}>Welcome back!</Text>

        <LoginTextField
          icon="mail"
          placeholder="Email"
          onBlur={ValidateEmail}
          warrning={isValidEmail}
          onChangeText={val => setUserEmail(val)}
        />
        <LoginTextField
          icon="key"
          rightIcon="eye"
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
          onBlur={ValidatePassword}
          warrning={isValidPassword}
          onChangeText={val => setUserPassword(val)}
        />

        <TouchableOpacity style={styles.forgotTxtOpacity}>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <LoginBtn name={'Login'} onPress={isValidate} />

        <View style={styles.flxDirectn}>
          <Text style={styles.orTxtRow}> __________________ </Text>
          <Text style={styles.orTxt}>OR</Text>
          <Text style={styles.orTxtRow}> __________________ </Text>
        </View>

        <Text style={styles.headerfnt}>Continue with</Text>

        <View style={styles.imgContainer}>
          <Image
            style={[styles.fbGoogleBtn, {marginRight: 6}]}
            source={require('../../../assets/images/facebook.jpg')}
          />
          <Image
            style={[styles.fbGoogleBtn, {marginLeft: 6}]}
            source={require('../../../assets/images/google.jpg')}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
