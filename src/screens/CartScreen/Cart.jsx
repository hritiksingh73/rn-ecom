import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const datafetch = useSelector(state => state.userInfo.loginpage);
  return (
    <View>
       <Button onPress={() => console.log(datafetch)} title="Check Store Data"/>
      
    </View>
  );
  
};
const styles = StyleSheet.create({});

export default Cart;
