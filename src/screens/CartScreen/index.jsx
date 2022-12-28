import React from 'react';
import {View, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import CartItems from './CartItems';
import ListItem from '../../components/ListItem';
import image from '../../config/image';
import {Button} from 'react-native-paper';

export default function CartScreen({navigation}) {
  const cartData = useSelector(state => state.cartProductReducer.cartProducts);

  return (
    <>
      {cartData == '' ? (
        <View style={styles.cartImgContainer}>
          <Image source={image.cart} style={styles.cartImgStyle} />
          <Text style={styles.emptyCartTxt}>Hey, it feels so light!</Text>
          <Text style={styles.emptyBag}>
            There is nothing in your bag. Let's add some items.
          </Text>
          <Button
            icon="cart"
            mode="contained-tonal"
            buttonColor="lightgreen"
            onPress={() => navigation.navigate('Popular Products')}>
            Go Shopping
          </Button>
        </View>
      ) : (
        <ListItem
          data={cartData}
          renderItem={({item}) => (
            <CartItems
              item={item}
              onAddToCart={() => {
                dispatch(addCartProduct(item));
              }}
            />
          )}
          ItemSeparatorComponent={() => {
            return <View style={styles.itemDivider}></View>;
          }}
        />
      )}
    </>
  );
}
