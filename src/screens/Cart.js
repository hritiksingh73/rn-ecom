import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
      <Button title="Cart" onPress={() => navigation.navigate('Search')} />
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

export default Cart;
