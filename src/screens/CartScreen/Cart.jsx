import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {addItemToCart} from '../../redux/action/Action';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {
  //removeItemFromCart,
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';

const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  //console.log(counter)
  const dispatch = useDispatch();


  return (
    <SafeAreaView style={{flex: 1}}>
      
        <View style={styles.mainHeader}></View>
        <FlatList
          data={item}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainContainer}>
                <Image
                  source={{uri: item.image}}
                  style={styles.flatlistImage}
                />
                <View style={styles.container}>
                  <Text>{item.title}</Text>
                  <View style={styles.Quantityadjustment}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.Quantityadjustment}>
                      <TouchableOpacity
                        style={styles.decreaseButton}
                        onPress={() => dispatch(DecreaseItemCountInCartAction(item.id))} >
                        <Text>-</Text>
                      </TouchableOpacity>

                      <Text style={styles.increarseButton}>zero</Text>{/*Need to work here */}
                      
                      <TouchableOpacity
                        style={styles.increarseButton}
                        onPress={() => dispatch(increaseItemQuantity(item.id))} >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      
    </SafeAreaView>
  );
};

export default Cart;
