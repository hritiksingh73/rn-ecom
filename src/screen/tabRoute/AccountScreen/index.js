import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import IconAntDesign from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const AccountScreen = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <IconAntDesign name={'ios-menu-outline'} size={35} />
          <Text style={styles.textHeader}>My Account</Text>
          <IconAntDesign name={'notifications-outline'} size={35} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.arrange}>
          <IconAntDesign
            name={'person-outline'}
            size={35}
            style={styles.icondesign}
          />
          <Text>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrange}>
          <IconAntDesign
            name={'md-reader-outline'}
            size={35}
            style={styles.icondesign}
          />
          <Text>Manage Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrange}>
          <IconAntDesign
            name={'ios-menu-outline'}
            size={35}
            style={styles.icondesign}
          />
          <Text>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrange}>
          <IconAntDesign
            name={'heart-outline'}
            size={35}
            style={styles.icondesign}
          />
          <Text>My Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrange} onPress={signOut}>
          <IconAntDesign
            name={'md-lock-closed-outline'}
            size={35}
            style={styles.icondesign}
          />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AccountScreen;
