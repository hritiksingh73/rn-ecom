import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  const signOut = () => {
    //alert('hello')
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  };
  return (
    <View style={styles.container}>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>Account</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
