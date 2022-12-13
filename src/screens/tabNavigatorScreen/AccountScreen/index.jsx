import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const AccountScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizntlMrgn}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'user'} size={25} color={'#404040'} />
            <Text style={styles.txtArea}>My Profile</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.itemSepertor} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Manage Addresses')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'calendar'} size={25} color={'#404040'} />
            <Text style={styles.txtArea}>Manage Addresses</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={() => navigation.navigate('Order History')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'book'} size={25} color={'#404040'} />
            <Text style={styles.txtArea}>Order History</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={() => navigation.navigate('My Wishlist')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'gift'} size={25} color={'#404040'} />
            <Text style={styles.txtArea}>My Wishlist</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={signOut}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'power'} size={25} color={'#404040'} />
            <Text style={styles.txtArea}>Logout</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
