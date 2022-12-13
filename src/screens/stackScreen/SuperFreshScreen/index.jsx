import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import GroceryProduct from '../../../data/GroceryProduct.js';
import {addToCart} from '../../../redux/action/Action.js';
import SuperFreshItem from '../../../data/SuperFreshItem.js';
import styles from './styles.js';
import color from '../../../constant/color.js';
import image from '../../../config/Image.js';

const SuperFreshScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userRecord);
  const cartList = useSelector(state => state.userData.cartProducts);
  const userID = useSelector(state => state.userData.userID);
  const FirestoreItem = item => {
    firestore()
      .collection('Cart')
      .doc(userID)
      .set({
        ...cartList,
      })
      .then(() => {
        // console.log('User added!');
      });
  };

  const VeggiesItem = ({item}) => {
    return (
      <View style={styles.item}>
        <ImageBackground style={styles.flatlist} source={item.image} />
        <Text style={styles.fresh}>Super Fresh</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const PopularProducts = ({item}) => {
    return (
      <View style={styles.data}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.dollar}>{item.price}</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
            FirestoreItem(item);
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Icon name="bars" size={20} />
        <Text style={styles.text}>Super Fresh</Text>
        <Icon name="bells" size={20} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View style={styles.vegetableImage}>
          <Image source={image.vegetable} style={styles.freshImage} />
          <View>
            <Text style={styles.superFresh}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
          </View>
          <View style={styles.heart}>
            <Icon name="hearto" size={24} style={styles.heartIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        data={SuperFreshItem}
        renderItem={item => VeggiesItem(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
      <View style={styles.iconCircle}>
        <Text style={styles.popular}>Poppular Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Popular Products')}>
          <Icon name="arrowright" size={25} style={styles.iconSize} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={GroceryProduct}
        renderItem={PopularProducts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default SuperFreshScreen;
