import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="bars" size={20} />
        <TextInput placeholder="Super Fresh" style={styles.placeholder} />
        <Icon name="bells" size={20} />
      </View>
      <ImageBackground source ={require('../assets/vegetable.jpeg')} style={styles.image}>
      <Text style={styles.text}>Super Fresh</Text>
      <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
      </ImageBackground>
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
  icon: {
    flexDirection: 'row',
    width: 300,
  },
  text:{
    fontSize:20
  },
  placeholder: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 80,
  },
  image:{
    height:200,
    width:400
  }
});

export default Cart;
