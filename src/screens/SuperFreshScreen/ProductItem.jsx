import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import CategoryGridItem from '../../components/CategoryGridItem';
import Entypo from 'react-native-vector-icons/Entypo';
import {addToWishlist} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';

const ProductItem = ({item, onAddToCart}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.productDetailContainer}>
      <CategoryGridItem imgSource={{uri: item.imageUrl}} />
      <View style={styles.itemDirection}>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => dispatch(addToWishlist(item))}>
          <Entypo name="heart-outlined" size={20} style={{marginLeft: '70%'}} />
        </TouchableOpacity>
      </View>

      <Text style={styles.priceTxt}>{item.price}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => onAddToCart(item)}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProductItem;
