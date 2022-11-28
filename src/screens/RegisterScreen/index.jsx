import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/action/Action.js';
import {userFullInfo} from '../../redux/action/Action.js';
import TextInputComponent from '../../components/TextInputComponent.js';
import styles from './styles.js';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [fullnameValid, setFullNameValid] = useState(true);
  const [mobilenoValid, setMobileNoValid] = useState(true);
  const dispatch = useDispatch();
  const userRecord = useSelector(state => state.userData.userRecord);

  const usersCollection = firestore().collection('Users');
  const userDocument = firestore().collection('Users').doc('userId');

  const updateRegister = async () => {
    if (email === '' && password === '') {
      alert('Empty email and password');
    } else {
//       auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(({user}) => {
//         user.updateProfile({
//           displayName: fullname,
//         });
//         console.log(email);
//       })

//       firestore()
//      .collection('Users')
//      .doc(user.uid)
//      .set({
//       name: fullname,
//       email: email,
//       })
//     .then(() => {
//       console.log('User added!', userID);
//     })

//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {
//           console.log('That email  in use!');
//         }

//         if (error.code === 'auth/invalid-email') {
//           console.log(' email invalid!');
//         }
//         console.error(error);
//       });
//       let userInfo = {
//             fullname: fullname,
//             email: email,
//             mobileno: mobileno,
//             password: password,
//           };
//     dispatch(userFullInfo(userInfo));;
//     console.log(userInfo);
//   };
// }
      try {
        const userRes = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        await userRes.user.updateProfile({
          displayName: fullname,
        });
        await userRes.user.additionaluserInfo({
          phoneNumber: mobileno,
        });
        console.log('userRes=======>>', userRes);
        
      firestore()
     .collection('Users')
     .doc(User.uid)
     .set({
      name: fullname,
      email: email,
      })
    .then(() => {
      console.log('User added!', userID);
    });

    
    } catch (error) {
        console.error(error.code);
      }
    }
    let userInfo = {
      fullname: fullname,
      email: email,
      mobileno: mobileno,
      password: password,
    };
    // const res = dispatch(userId([user.uid]));
    console.log('User account created')
    const res = dispatch(userFullInfo(userInfo));
  };
  
  

  // firestore()
  // .collection('Users')
  // .doc('ABC')
  // .update({
  //   email: email
    
  // })
  // .then(() => {
  //   console.log('User updated!');
  // })


  const checkValidFullName = () => {
    let reg = /[a-zA-Z][a-zA-Z ]*/;
    setFullNameValid(reg.test(fullname) === true ? '' : 'Enter a full name');
  };

  const checkValidEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmailValid(reg.test(email) === true ? '' : 'Wrong email');
  };

  const checkValidPassword = () => {
    var Regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    setPasswordValid(
      Regex.test(password) === true ? '' : 'Enter a valid password',
    );
  };

  const checkValidMobileNo = () => {
    var Regex = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
    setMobileNoValid(
      Regex.test(mobileno) === true ? '' : 'Enter a valid mobile no',
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="leftcircleo" size={20} />
      <Text style={styles.register}>Register</Text>
      <View style={styles.input}>
        <Icon name="user" size={20} />
        <TextInputComponent
          placeholder="Full Name"
          value={fullname}
          style={styles.placeholder}
          autoCapitalize="words"
          onBlur={checkValidFullName}
          onChangeText={text => setFullName(text)}
        />
      </View>
      <Text style={styles.text}>{fullnameValid}</Text>
      <View style={styles.input}>
        <Icon name="mail" size={20} />
        <TextInputComponent
          placeholder="Email"
          value={email}
          style={styles.placeholder}
          onBlur={checkValidEmail}
          autoCapitalize="words"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Text style={styles.text}>{emailValid}</Text>
      <View style={styles.input}>
        <Icon name="phone" size={20} />
        <TextInputComponent
          placeholder="Mobile No"
          value={mobileno}
          style={styles.placeholder}
          onBlur={checkValidMobileNo}
          onChangeText={text => setMobileNo(text)}
        />
      </View>
      <Text style={styles.text}>{mobilenoValid}</Text>
      <View style={styles.input}>
        <Icon name="key" size={20} />
        <TextInputComponent
          placeholder="Password"
          value={password}
          style={styles.placeholder}
          autoCapitalize="words"
          onBlur={checkValidPassword}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Text style={styles.text}>{passwordValid}</Text>
      <View style={styles.button}>
        <Button
          title="Register"
          color="limegreen"
          onPress={() => updateRegister()}
        />
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>Login here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
