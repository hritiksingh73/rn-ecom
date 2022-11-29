import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';

const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainHeader}></View>
      <FlatList
        data={item}
        renderItem={({item, index}) => {
          return (
            <View style={styles.mainContainer}>
              <Image source={{uri: item.image}} style={styles.flatlistImage} />
              <View style={styles.container}>
                <Text>{item.title}</Text>
                <View style={styles.Quantityadjustment}>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <View style={styles.Quantityadjustment}>
                    <TouchableOpacity
                      style={styles.decreaseButton}
                      onPress={() =>
                        dispatch(DecreaseItemCountInCartAction(item.id))
                      }>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.increarseButton}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.increarseButton}
                      onPress={() => dispatch(increaseItemQuantity(item.id))}>
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
