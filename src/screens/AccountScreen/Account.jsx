import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import Address from 'react-native-vector-icons/Foundation';
import Tree from 'react-native-vector-icons/Ionicons';
import Branch from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountTextComponent from '../../component/AccountTextComponent/AccountTextComponent';

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

      <AccountTextComponent Icon="profile" Text="My Profile" />
      <AccountTextComponent Address="address-book" Text="Manage Addresses" />
      <AccountTextComponent Branch="family-tree" Text="Order History" />
      <AccountTextComponent Icon="hearto" Text="My Wishlist" />
      {/* <AccountTextComponent Icon="logout" Text="Logout" onPress={signOut}/> */}

      <TouchableOpacity style={styles.menuList} onPress={signOut}>
        <Icon name="logout" size={30} style={styles.favourite} />
        <Text style={styles.mycarticonsize}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Account;
