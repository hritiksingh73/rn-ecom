import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Account = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View>
      <Text>Account</Text>
      <Button title="SignOut" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
