import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.cart);
  console.log(data);
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Cart </Text>
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
export default Cart;
