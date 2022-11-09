import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import Address from 'react-native-vector-icons/FontAwesome';
import Tree from 'react-native-vector-icons/Entypo';
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
        <Tree name="menu" size={30} style={styles.favourite}/>
        <Text style={{fontSize: 25}}>My Account</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>

      <TouchableOpacity style={styles.menuList}>
        <Icon name="profile" size={30} style={styles.favourite} />
        <Text style={{fontSize: 18}}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Address name="address-book-o" size={30} style={styles.favourite} />
        <Text style={{fontSize: 18}}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Tree name="flow-tree" size={30} style={styles.favourite} />
        <Text style={{fontSize: 18}}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList}>
        <Icon name="hearto" size={30} style={styles.favourite} />
        <Text style={{fontSize: 18}}>My Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuList} onPress={signOut}>
        <Logout name="logout" size={30} style={styles.favourite} />
        <Text style={{fontSize: 18}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuList: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favourite: {
    paddingRight: 30,
  },
});

export default Account;
