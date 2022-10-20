import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Screen</Text>
      <Button title="Search" onPress={() => navigation.navigate('Account')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default Search;
