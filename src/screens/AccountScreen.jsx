import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="Account" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Account;
