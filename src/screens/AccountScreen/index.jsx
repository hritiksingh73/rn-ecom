import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles.js';

const AccountScreen = () => {
  const signOut = () => {
    //alert('hello')
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}>
    <Text>Account</Text>
      <Button title="Sign Out" onPress={signOut} /> */}

      <View style={styles.account}>
        <Icon name="menu" size={20} />
        <Text style={styles.text}>My Account</Text>
        <Icon name="bell-badge-outline" size={20} />
      </View>
      <View style={styles.input}>
        <Icon name="account-box-outline" size={20} />
        <Text style={styles.txt}>My Profile</Text>
      </View>
      <View style={styles.input}>
        <AntDesign name="contacts" size={20} />
        <Text style={styles.txt}>Manage Addresses</Text>
      </View>
      <View style={styles.input}>
        {/* //<Entypo name = "flow-tree"/> */}
        <Text style={styles.txt}>Order History</Text>
      </View>
      <View style={styles.input}>
        {/* <Entypo name = 'heart-outlined'/> */}
        <Text style={styles.txt}>My WishList</Text>
      </View>
      <View style={styles.input}>
        <Icon name="logout" size={20} />
        <Text style={styles.txt}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
