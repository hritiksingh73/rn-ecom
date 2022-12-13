import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import CartItems from './CartItems';
import ListItem from '../../components/ListItem';

export default function CartScreen() {
  const cartData = useSelector(state => state.cartProductReducer.cartProducts);

  return (
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
  );
}
