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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../../redux/action/Action';
import styles from './styles';
const Cart = () => {
  const navigation = useNavigation();
  const item = useSelector(state => state.userInfo.cart);
  //console.log(item);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
    console.log(item);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            style={styles.headerNavigation}
            onPress={() => {
              navigation.navigate("SuperFresh");
            }}>
            <Text style={{fontWeight: '70%', fontsize: 20}}>Back</Text>
          </TouchableOpacity>
        </View>
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
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => {
                      removeItem(item.id);
                    //  console.log(item.id)
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
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
