import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const OrderHistory = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>OrderHistory</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
	  width: '100%',
	  height: '100%',
    backgroundColor: 'white',
  },

});

export default OrderHistory;