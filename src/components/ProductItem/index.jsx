import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CategoryGridItem from '../../components/CategoryGridItem';
import {addToWishlist} from '../../redux/actions/userAction';
import {globalStyle} from '../../constant/globalStyle';

const ProductItem = ({item, onAddToCart}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={globalStyle.productScreen}>
      <View style={globalStyle.productDetailContainer}>
        <CategoryGridItem
          imgSource={{uri: item.imageUrl}}
          onPress={() =>
            navigation.navigate('Product Details', {
              productId: item.id,
            })
          }
        />

        <View style={globalStyle.itemDirection}>
          <Text>{item.title}</Text>
          <TouchableOpacity onPress={() => dispatch(addToWishlist(item))}>
            <Entypo
              name="heart-outlined"
              size={20}
              style={{marginLeft: '70%'}}
            />
          </TouchableOpacity>
        </View>

        <Text style={globalStyle.priceTxt}>${item.price} each</Text>

        <TouchableOpacity
          style={globalStyle.btnContainer}
          onPress={() => onAddToCart(item)}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductItem;
