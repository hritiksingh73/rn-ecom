import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from './ListItem';
import {color} from '../constant/color';
import {addCartProduct} from '../redux/actions/userAction';

const RelatedProducts = props => {
  const products = useSelector(state => state.productsReducer.products);
  const dispatch = useDispatch();

  const renderGroceryProducts = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image
          source={{uri: item.imageUrl}}
          style={[styles.imgStyle, props.style]}
        />
        <View style={styles.txtContainer}>
          <Text>{item.title}</Text>
          <Text style={styles.priceTxt}>{item.price}</Text>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => dispatch(addCartProduct(item))}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ListItem
      data={products}
      renderItem={renderGroceryProducts}
      horizontal
      contentContainerStyle={props.contentContainerStyle}
    />
  );
};
const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 50,
  },
  imgStyle: {
    width: 210,
    height: '50%',
    margin: 5,
  },
  priceTxt: {
    color: color.primary,
  },
  txtContainer: {marginHorizontal: 20},
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  btnTxt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
export default RelatedProducts;
