import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import CartItems from './CartItems';
import ListItem from '../../components/ListItem';

export default function CartScreen() {
  const cartData = useSelector(state => state.userDataReducer.cartProducts);

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
