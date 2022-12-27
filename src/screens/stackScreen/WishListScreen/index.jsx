import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../../../redux/action/Action.js';
import styles from './styles.js';

import color from '../../../constant/color.js';
import GroceryProduct from '../../../data/GroceryProduct.js';

const WishListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const dataItem = useSelector(state => state.cartData.productData);

  const addList = item => {
    dispatch(addToCart(item));
  };

  const popularProductData = ({item}) => {
    return (
      <View style={styles.data}>
        <TouchableOpacity onPress={() => navigation.navigate('Super Fresh')}>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.imageStyle}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price} each</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addList(item);
            // console.log(item.id);
          }}>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.product}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.text}>WishList</Text>
      </View>

      <FlatList
        data={dataItem}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={popularProductData}
      />
    </SafeAreaView>
  );
};

export default WishListScreen;
