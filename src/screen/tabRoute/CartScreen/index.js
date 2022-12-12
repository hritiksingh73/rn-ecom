import React from 'react';
import {Text, TouchableOpacity, View, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {IncCartItem, DecCartItem} from '../../../redux/action/action';

import {styles} from './styles';

const CartScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.cart);

  return (
    <SafeAreaView style={styles.conatiner}>
      <Text style={styles.title}>Cart</Text>
      <View>
        <Image
          source={require('../../../assests/shopkeeper1.jpeg')}
          style={styles.headImg}
        />
        <Text style={styles.headTxt}>Super Fresh</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.flatcontainer}>
              <Image
                style={styles.imgcontain}
                source={item.image}
                resizeMode={'contain'}
              />
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.Price}</Text>
              </View>
              <View style={styles.mathcontain}>
                <TouchableOpacity
                  style={styles.incBtn}
                  onPress={() => dispatch(DecCartItem(item.id))}>
                  <Text style={styles.incTxt}>-</Text>
                </TouchableOpacity>
                <Text style={styles.num}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.incBtn}
                  onPress={() => dispatch(IncCartItem(item.id))}>
                  <Text style={styles.incTxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default CartScreen;
