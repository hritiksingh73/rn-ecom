import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>UserScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 100,
    backgroundColor: 'gray',
    width: '100%',
  },
});
export default UserScreen;
