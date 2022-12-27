import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import ListItem from '../../components/ListItem';
import RelatedProducts from '../../components/RelatedProducts';
import {color} from '../../constant/color';
import {addCartProduct} from '../../redux/actions/userAction';
import {addToWishlist} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';

const ProductDetails = item => {
  const route = useRoute();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const itemId = route.params.productId;

  const renderItemDetail = ({item}) => {
    return (
      <>
        <View style={styles.imgContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price} each</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.divider} />
        <Text style={styles.productsTxt}>Related Items</Text>
        {/* <RelatedProducts /> */}

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: 'black'}]}
            onPress={() => dispatch(addToWishlist(item))}>
            <Text style={styles.btnTxt}>Add to Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: color.primary}]}
            onPress={() => dispatch(addCartProduct(item))}>
            <Text style={styles.btnTxt}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const getSelectedItemDetail = async () => {
    try {
      const response = await fetch(
        `https://grocery-backend-in.vercel.app/products/${itemId}`,
      );
      const json = await response.json();
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedItemDetail();
  }, []);

  return (
    <View style={styles.screen}>
      <AntDesign
        name="left"
        size={30}
        onPress={() => goBack()}
        style={{margin: 15}}
      />
      <ListItem data={products} renderItem={renderItemDetail} />
    </View>
  );
};
export default ProductDetails;
