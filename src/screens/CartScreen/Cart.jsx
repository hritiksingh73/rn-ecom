// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const datafetch = useSelector(state => state.userInfo.loginpage);
//   return (
//     <View>
//        <Button onPress={() => console.log(datafetch)} title="Check Store Data"/>

//     </View>
//   );

// };
// const styles = StyleSheet.create({});

// export default Cart;

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../../redux/action/Action';
import styles from './styles';
const Cart = () => {
  const navigation = useNavigation();
  const item = useSelector(state => state.userInfo.productData);
  console.log(item);
  const dispatch = useDispatch();

  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            style={styles.headerNavigation}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontWeight: '70%', fontsize: 20}}>Back</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={item}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainContainer}>
                <View style={styles.container}>
                  <Text>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => {
                      removeItem(index);
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{uri: item.image}}
                  style={styles.flatlistImage}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
