import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Account </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Account;
