import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Email from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../../redux/action/Action';
import styles from '../LoginScreen/styles';
import FormContainer from '../../componentReuse/FormInput';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const datafetch = useSelector(state => state.userInput.loginpage);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  validateEmail = email => {
    var rejx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return rejx.test(email);
  };

  validatePassword = userPassword => {
    var re =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return re.test(userPassword);
  };

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({
          emailError: 'please enter a valid email (eg: A@123@Indianic.com)',
        })
      : setValidation({emailError: ''});
  };

  const passwordValidator = () => {
    userPassword == '' || !validatePassword(userPassword)
      ? setValidation({
          passwordError: 'please enter a valid password ',
        })
      : setValidation({passwordError: ''});
  };

  const dispatchCredentials = () => {
    dispatch(addUser(email, userPassword));
    navigation.navigate('TabNav');
  };

  return (
    <SafeAreaView>
      <Image
        source={require('../../asset/GrocerryMain.jpeg')}
        style={styles.groceryHeader}
      />

      <Text style={styles.userInputHeader}>Email</Text>
      <View style={styles.userDetails}>
        <Email name="email" color="black" size={24} />
        <FormContainer
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          value={email}
          placeholder="Email"
          autoCapitalize="words"
          onBlur={() => emailValidator()}
        />
      </View>
      <Text style={styles.errormsg}>{validation.emailError}</Text>

      <Text style={styles.userInputHeader}>Password</Text>
      <View style={styles.userDetails}>
        <Password name="form-textbox-password" color="black" size={24} />
        <FormContainer
          onChangeText={text => setUserPassword(text)}
          value={userPassword}
          placeholder="Password"
          autoCapitalize="words"
          onBlur={() => passwordValidator()}
          secureTextEntry={true}
          maxLength={9}
        />
      </View>
      <Text style={styles.errormsg}>{validation.passwordError}</Text>
      <TouchableOpacity
        style={styles.forgetPassword}
        onPress={() => console.log(datafetch)}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={
          !validateEmail(email) || !validatePassword(userPassword)
            ? true
            : false
        }
        onPress={() => {
          dispatchCredentials();
        }}
        style={styles.loginButtonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
      <Image
        source={require('../../asset/orcontinuewith.jpeg')}
        style={styles.orContinue}
      />

      <TouchableOpacity style={styles.bottomSocialMedia}>
        <View style={styles.bottomFacebook}>
          <Image
            style={styles.facebook}
            source={require('../../asset/facebook.jpeg')}
          />
        </View>
        <View style={styles.bottomGoogle}>
          <Image
            style={styles.googleImage}
            source={require('../../asset/GoogleImage.jpeg')}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.bottomHeadline}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'green'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
