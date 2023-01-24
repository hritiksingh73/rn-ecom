import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, TextInput} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const EditMyProfileScreen = () => {
  const [userInfo, setUserInfo] = useState('');
  const registrationData = useSelector(state => state.userInfo.loginpage);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registeremail, setRegisterEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const UpdateUserData = () => {
    firestore()
      .collection('Users')
      .doc(registrationData.name) //uid!!!
      .update({
        name: firstName,
        lastName: lastName,
        email: registeremail,
        Phone: phoneNumber,
      })
      .then(() => {
        console.log('User updated!');
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Edit profile</Text>
      </View>
      <View style={styles.avator}>
        <Avatar.Text size={120} label={'Aditya'} />
      </View>
      <Text style={styles.uploadPhoto}>Upload Photo</Text>

      <View style={styles.textInputheaderContainer}>
        <View style={styles.firstNameContainer}>
          <TextInput
            onChangeText={text => setFirstName(text)}
            value={firstName}
            placeholder="Email"
            autoCapitalize="words"
            mode="outlined"
            label="First Name"
            style={styles.firstName}
          />
        </View>

        <View style={styles.halfInputContainer}>
          <TextInput
            onChangeText={text => setLastName(text)}
            value={lastName}
            placeholder="Email"
            autoCapitalize="words"
            mode="outlined"
            label="Last Name"
            style={styles.lastName}
          />
        </View>
      </View>
      <View style={styles.registeremailContainer}>
        <TextInput
          onChangeText={text => setRegisterEmail(text)}
          value={registeremail}
          placeholder="Email"
          autoCapitalize="words"
          mode="outlined"
          label="Email"
          style={styles.registeremail}
        />
      </View>
      <View style={styles.phoneNumberContainer}>
        <TextInput
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="numeric"
          value={phoneNumber}
          placeholder="Email"
          autoCapitalize="words"
          mode="outlined"
          label="Phone Number"
          style={styles.phoneNumber}
        />
      </View>

      <View style={styles.saveButtonContainer}>
        <TouchableOpacity onPress={() => UpdateUserData()}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditMyProfileScreen;
