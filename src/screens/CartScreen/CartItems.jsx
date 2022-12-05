import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icons from '../../components/Icons';
import styles from './styles';
import {decreaseCartProduct} from '../../redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';
import {increaseCartProduct} from '../../redux/actions/userAction';

const CartItems = ({item}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.userDataReducer.cartProducts);

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
          onPress={() => dispatch(decreaseCartProduct(item.id))}>
          <Icons name="minus" size={20} />
        </TouchableOpacity>
        <Text style={[styles.cartButton, styles.numTxt]}>{item.qty}</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => dispatch(increaseCartProduct(item.id))}>
          <Icons name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartItems;
