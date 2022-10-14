import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {children}
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
