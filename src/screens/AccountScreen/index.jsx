import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    Alert.alert('Are you sure you want to signout?', '', [
      {
        text: 'cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          auth()
            .signOut()
            .then(() => console.log('User signed out'));
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} />
        <Text style={styles.headerText}>My Account</Text>
        <Icon name="bell-badge-outline" size={30} />
      </View>

      <TouchableOpacity style={styles.accountContainer}>
        <Icon name="account-box-outline" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountContainer}>
        <AntDesign name="contacts" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>Manage Addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountContainer}>
        <Entypo name="flow-tree" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.accountContainer}
        onPress={() => navigation.navigate('Wishlist')}>
        <Entypo name="heart-outlined" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountContainer} onPress={signOut}>
        <Icon name="logout" size={20} style={styles.iconStyle} />
        <Text style={styles.txtStyle}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default AccountScreen;
