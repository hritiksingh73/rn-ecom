import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../ListItem';
import {addCartProduct} from '../../redux/actions/userAction';
import {styles} from './styles';

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
          <Text style={styles.priceTxt}>
            ${item.price} each{'     '}
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          </Text>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              dispatch(addCartProduct(item));
            }}>
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
      style={{marginHorizontal: '4%'}}
    />
  );
};
export default RelatedProducts;
