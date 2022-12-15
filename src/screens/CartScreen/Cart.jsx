import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';
import CartBillingData from '../../component/CartBillingData/CartBillingData';

const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  const dispatch = useDispatch();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);

  const ItemPrice = item.map(value => {
    const total = value.price * value.quantity;
    return total;
  });

  const CalculateTotalItemPrices = ItemPrice.reduce((total, value) => {
    return Math.round(total + value);
  }, 0);

  const CalculateDeliveryCharges = (CalculateTotalItemPrices * 3) / 100;

  const CalculateTax = (CalculateTotalItemPrices * 12) / 100;

  const CalculateSubTotal = Math.round(
    CalculateTotalItemPrices + CalculateDeliveryCharges + CalculateTax,
  );

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={styles.parent}>
        <View style={styles.mainHeader}>
          <Arrow name="left" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Cart</Text>
        </View>
        <FlatList
          data={item}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainContainer}>
                <Image
                  source={{uri: item.image}}
                  style={styles.flatlistImage}
                />
                <View style={styles.container}>
                  <Text style={styles.itemtitle}>{item.title}</Text>
                  <View style={styles.Quantityadjustment}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.QuantityHandler}>
                      <TouchableOpacity
                        style={styles.decreaseButton}
                        onPress={() => {
                          dispatch(DecreaseItemCountInCartAction(item.id));
                        }}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityupdate}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.increarseButton}
                        onPress={() => dispatch(increaseItemQuantity(item.id))}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.couponContainer}>
          <View style={styles.couponCode}>
            <Icon
              name="ticket-percent-outline"
              size={30}
              style={styles.couponIcon}
            />
            <TextInput style={styles.couponInput} placeholder="Coupon Code" />
          </View>
          <TouchableOpacity>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.billing}>
          <Text style={styles.billingText}>Bill Details</Text>
        </View>

        <CartBillingData text="Total" Count={'$' + CalculateTotalItemPrices} />
        <CartBillingData
          text="Delivery Charge"
          Count={'$' + CalculateDeliveryCharges}
        />
        <CartBillingData text="Coupon" />
        <CartBillingData text="Tax" Count={'$' + CalculateTax} />
        <CartBillingData text="Total" Count={'$' + CalculateTotalItemPrices} />
        <View style={styles.bottom}>
          <View>
            <Text style={styles.bottomApply}>Total</Text>
            <Text style={styles.subTotal}>${CalculateSubTotal}</Text>
            <Text style={styles.saveMsg}>You Save $ 5 on this</Text>
          </View>
          <View style={styles.checkOut}>
            <TouchableOpacity>
              <Text style={styles.checkoutButton}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cart;
