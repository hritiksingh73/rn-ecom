import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddFruitsToCart} from '../../redux/action/action';
import styles from './styles';

const TrendingItems = props => {
  const data = props.data;
  var isItemAvailable = false;

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartReducer.fruitCart);

  const SetDataToCartScreen = item => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === item.id) {
        var isItemAvailable = true;
      }
    }
    if (!isItemAvailable) {
      dispatch(AddFruitsToCart(item));
    } else {
      alert('Item Already added to Cart');
    }
  };

  return (
    <View style={styles.popularProductContainer}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.productList}>
              <View style={styles.imgContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.itemImage}
                    resizeMode="contain"
                    source={item.url}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>

                <Text style={styles.mrpBlock}>
                  <Text style={styles.itemMrp}>₹{item.price} </Text>
                  <Text style={styles.itemMaxMrp}> ₹{item.maxPrice} </Text>
                  <Text style={styles.itemQnty}>/{item.quantity}</Text>
                </Text>

                <TouchableOpacity
                  style={styles.addToCartContainer}
                  onPress={() => SetDataToCartScreen(item)}>
                  <Text style={styles.addToCartBtn}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TrendingItems;
