import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button} from 'react-native';

const Sort = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.sort}>Sort</Text>
        <Text style={styles.text}>Price - Low to High</Text>
        <Text style={styles.text}>Price - High to Low</Text>
        <Text style={styles.text}>Newest First</Text>
        <Text style={styles.text}>Discount</Text>
      </View>
      <View style={styles.button}>
        <Button title="Cancel" />
        <Button title="Apply" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  sort: {
    textAlign: 'center',
    fontSize: 20,
    margin: 15,
  },
  text: {
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sort;
