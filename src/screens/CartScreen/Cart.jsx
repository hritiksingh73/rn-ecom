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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';
import {ScrollView} from 'react-native-virtualized-view';

const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  const dispatch = useDispatch();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);

 

  const ItemPrice = item.map(value => {
    const total = value.price * value.quantity;
    return total;
  });

  const TotalItemPrices = ItemPrice.reduce((total, value) => {
    return Math.round(total + value);
  }, 0);

  const DeliveryCharges = (TotalItemPrices * 3) / 100;

  const Tax = (TotalItemPrices * 12) / 100;

  const SubTotal = Math.round(TotalItemPrices + DeliveryCharges + Tax);

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={{flex: 1}}>
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
                  <Text>{item.title}</Text>
                  <View style={styles.Quantityadjustment}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.Quantityadjustment}>
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
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Total </Text>
          <Text style={styles.billingUnits}>${TotalItemPrices}</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}> Delivery Charge</Text>
          <Text style={styles.billingUnits}>${DeliveryCharges}</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Coupon</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Tax</Text>
          <Text style={styles.billingUnits}>${Tax}</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Sub Total </Text>
          <Text style={styles.billingUnits}>${SubTotal}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomApply}>Total</Text>
          <Text style={styles.subTotal}>${SubTotal}</Text>
          <Text style={styles.saveMsg}>You Save $ 5 on this</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cart;
