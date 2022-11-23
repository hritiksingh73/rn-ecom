import React, { useState } from 'react';
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


import {
  //removeItemFromCart,
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';
import styles from './styles';

const Cart = () => {
  const navigation = useNavigation();
  const item = useSelector(state => state.userInfo.cart);
  const quantity = useSelector(state => state.userInfo.quantity);
  const [itemCount, setItemCount] = useState(1);

  console.log(item);
  const dispatch = useDispatch();

  const removeItem = item => {
    dispatch(DecreaseItemCountInCartAction(item.id));
  };
  // const increaseItem = item => {
  //   dispatch(increaseItemQuantity(item));
  //   //console.log(item);
  // };
  const addItem = item => {
    dispatch(increaseItemQuantity(item.id));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
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
                        style={styles.increarseButton}
                        // onPress={() => {
                        //   removeItem(item.id);
                        // }}
                        onClick={() => {
                          setItemCount(itemCount + 1);
                        }}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.increarseButton}>{itemCount}</Text>
                      {/*Need to work here */}
                      <TouchableOpacity
                        style={styles.decreaseButton}
                        // onPress={() => {
                        //    addItem(item.id);
                        //   }}
                        onClick={() => {
                          setItemCount(itemCount - 1);
                        }}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
