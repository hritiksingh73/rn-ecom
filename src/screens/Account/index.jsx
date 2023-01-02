import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AccountScreens } from '../../config/constants/screens';

const MyAccountRow = ({ title, icon, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.rowContainer}
      onPress={() => navigation.navigate(navigateTo)}>
      <AntDesign name={icon} size={25} />
      <Text style={styles.rowTitle}>{title}</Text>
    </Pressable>
  );
};

const Account = () => {
  return (
    <View style={styles.container}>
      <MyAccountRow title="My Profile" icon="contacts" navigateTo="" />
      <MyAccountRow
        title="Manage Addresses"
        icon="contacts"
        navigateTo={AccountScreens.Addreesses.screenName}
      />
      <MyAccountRow title="My Profile" icon="contacts" navigateTo="" />
      <MyAccountRow title="My Wishlist" icon="hearto" navigateTo="" />
      <MyAccountRow title="Logout" icon="logout" navigateTo="" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 15,
    paddingLeft: 20,
    borderBottomColor: 'rgba(0, 0, 0,0.5)',
    borderBottomWidth: 0.2,
  },
  rowTitle: {
    fontSize: 17,
    marginLeft: 20,
    color: 'black',
  },
});
export default Account;
