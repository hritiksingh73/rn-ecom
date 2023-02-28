import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import styles from './styles';

const MyProfile = () => {
  const Response = auth()._user;
  // console.log('Account ---> ', Response);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const uid = useSelector(state => state.user.userID);

  firestore()
    .collection('Users')
    // .doc('ahJaeVOiPrWa0V2NpklO2IkmQTP2')
    .doc(uid)
    .get()
    .then(documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);

      if (documentSnapshot.exists) {
        const userData = documentSnapshot.data();
        setUserName(userData.name)
        setUserEmail(userData.email)
        setUserNumber(userData.number)

        console.log('User data: ', userData);
      }
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}></View>
        {/* <Text style={styles.userNameStyles}>{Response.displayName}</Text> */}
        <Text style={styles.userNameStyles}>{userName}</Text>
      </View>

      <View style={styles.itemSeperator} />
      <View style={styles.emailContainer}>
        <Text style={styles.title}>Email</Text>
        {/* <Text style={styles.userEmailStyle}>{Response.email}</Text> */}
        <Text style={styles.userEmailStyle}>{userEmail}</Text>
      </View>
      <View style={styles.itemSeperator} />
      <View style={styles.emailContainer}>
        <Text style={styles.title}>Mobile</Text>
        {/* <Text style={styles.userEmailStyle}>+91 {Response.phoneNumber}</Text> */}
        <Text style={styles.userEmailStyle}>+91 {userNumber}</Text>
      </View>
      <View style={styles.itemSeperator} />

      <View style={styles.btnContainer}>
        <PrimaryButton name={'Change Password'} />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
