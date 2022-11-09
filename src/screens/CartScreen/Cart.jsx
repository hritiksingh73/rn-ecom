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
  StyleSheet
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.userInfo.loginpage);
 
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontWeight: '70%', fontsize: 20}}>Back</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text>{item.name}</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'red',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      removeItem(index);
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 100,
                    height: 90,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Cart;
