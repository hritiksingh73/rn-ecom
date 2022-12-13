import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import Address from 'react-native-vector-icons/Foundation';
import Tree from 'react-native-vector-icons/Ionicons';
import Branch from 'react-native-vector-icons/MaterialCommunityIcons';
import Logout from 'react-native-vector-icons/MaterialIcons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <Tree name="ios-menu-outline" size={30} style={styles.favourite} />
        <Text style={styles.header}>My Account</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>

      <TouchableOpacity style={styles.menuList}>
        <Icon name="profile" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Address name="address-book" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>Manage Addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Branch name="family-tree" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon name="hearto" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList} onPress={signOut}>
        <Logout name="logout" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Account;
