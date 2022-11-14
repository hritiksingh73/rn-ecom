import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icons from '../../components/Icons';
import styles from './styles';
import {decreaseCartProduct} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';

const CartItems = ({item}) => {
  const dispatch = useDispatch();
  const handleDecreaseCart = cartItem => {
    dispatch(decreaseCartProduct(cartItem));
  };

  return (
    <View style={styles.productDetailContainer}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.imgStyle}
        resizeMode="center"
      />
      <View>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.priceTxt}>{item.price}</Text>
      </View>

      <View style={styles.cartBtnContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={cartItem => handleDecreaseCart(cartItem)}>
          <Icons name="minus" size={20} />
        </TouchableOpacity>
        <Text style={[styles.cartButton, styles.numTxt]}>1</Text>

        <TouchableOpacity style={styles.cartButton}>
          <Icons name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartItems;
