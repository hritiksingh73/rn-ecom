import React, {useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {removeToCart} from '../../redux/action/Action.js';
import Data from '../../homeData/Data.js';
import {increaseToCart, decreaseToCart} from '../../redux/action/Action.js';
import styles from './styles.js';
import firestore from '@react-native-firebase/firestore';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.userData.cartProducts);

  const removeList = item => {
    dispatch(removeToCart(item));
    console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainMargin}>
        <View>
          <Text style={styles.cart}>Cart</Text>
        </View>
        <View>
          <View style={styles.vegetableImage}>
            <Image
              source={require('../../assets/image3.jpeg')}
              style={styles.freshImage}
            />
            <Text style={styles.superImage}>Super Fresh</Text>
          </View>
          <View>
            <FlatList
              data={item}
              ItemSeparatorComponent={() => {
                return <View style={styles.itemDivide}></View>;
              }}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.mainList}>
                      <View style={styles.imageStyle}>
                        <Image
                          source={item.image}
                          style={styles.fruitImage}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={styles.itemStyle}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.dollarText}>{item.dollar}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.remove}
                        onPress={() => {
                          removeList(item.id);
                          console.log(item.id);
                        }}>
                        <Text style={styles.delete}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.counting}>
                      <View style={styles.addButton}>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(
                              decreaseToCart(item.id),
                              console.log(item.id),
                            )
                          }>
                          <Text style={styles.minus}> - </Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.number}>{item.quantity}</Text>
                      <View style={styles.increase}>
                        <TouchableOpacity
                          onPress={() =>
                            dispatch(
                              increaseToCart(item.id),
                              console.log(item.id),
                            )
                          }>
                          <Text style={styles.plus}> + </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
