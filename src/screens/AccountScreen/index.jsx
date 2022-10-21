import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  };
  return (
    <View>
      <Text>Account</Text>
      <Button title="sign out" onPress={signOut} />
    </View>
  );
};
export default AccountScreen;
