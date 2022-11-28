import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  IncrementCartItem,
  DecrementCartItem,
} from '../../../redux/action/action';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

const CartScreen = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.user.fruitCart);

  const UserItemPrice = () => {
    const ItemPrice = data.map(value => {
      let tot = value.price * value.numberOfItem;
      return tot;
    });
    const TotalItemPrices = ItemPrice.reduce((tot, val) => {
      return tot + val;
    }, 0);
    return TotalItemPrices;
  };
  const DeliveryCharge = () => {
    return 100;
  };
  const Coupon = () => {
    return 100;
  };
  const ItemTax = () => {
    let tot = UserItemPrice();
    return (tot * 18) / 100;
  };
  const TotalBilling = () => {
    return UserItemPrice() + DeliveryCharge() + ItemTax();
  };



  return (
    <SafeAreaView style={styles.constainer}>
      <ScrollView>
        <View style={styles.horizontlmrgn}>
          <View>
            <Text style={styles.title}>Cart</Text>
          </View>

          <View>
            <View style={styles.itemHeader}>
              <Image
                style={styles.imgStyl}
                source={require('../../../assets/images/MFruits1.jpg')}
              />
              <Text style={styles.headerTxt}>Fresh Fruits</Text>
            </View>
            <View>
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <View>
                      <View style={styles.cartItemContainer}>
                        <View style={styles.imgCntnr}>
                          <Image
                            style={styles.itemImg}
                            resizeMode="contain"
                            source={item.url}
                          />
                        </View>

                        <View style={styles.itemTitleArea}>
                          <Text style={styles.itemTitle}>{item.title}</Text>
                          <Text style={styles.itemMrp}>₹{item.price}</Text>
                        </View>

                        <View style={styles.countingCntnr}>
                          <View style={styles.counterBorder}>
                            <TouchableOpacity
                              onPress={() =>
                                dispatch(DecrementCartItem(item.id))
                              }>
                              <Text style={styles.dec}>- </Text>
                            </TouchableOpacity>
                          </View>

                          <Text style={styles.num}>{item.numberOfItem}</Text>
                          <View style={styles.incrementBtnStyle}>
                            <TouchableOpacity
                              onPress={() =>
                                dispatch(IncrementCartItem(item.id))
                              }>
                              <Text style={styles.inc}>+ </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={styles.borderBotm} />
                    </View>
                  );
                }}
              />
              <View style={styles.couponBlock}>
                <View style={styles.couponInnerBlock}>
                  <View style={styles.flxdir}>
                    <Feather
                      name={'credit-card'}
                      size={20}
                      style={styles.couponIconStyl}
                    />
                    <TextInput
                      style={styles.couponTxt}
                      placeholder="Coupon Code"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.applyBtn}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.billingBoxStyling}>
                <Text style={styles.billBoxHeader}>Bill Details</Text>

                <View style={styles.billingTxtBorder}>
                  <Text style={styles.billDetailTxt}>Total</Text>
                  <Text style={styles.pricingStyl}>₹{UserItemPrice()}</Text>
                </View>

                <View style={styles.billingTxtBorder}>
                  <Text style={styles.billDetailTxt}>Delivery Charge</Text>
                  <Text style={styles.pricingStyl}>₹{DeliveryCharge()}</Text>
                </View>
                <View style={styles.billingTxtBorder}>
                  <Text style={styles.billDetailTxt}>Coupon</Text>
                  <Text style={styles.pricingStyl}>₹{Coupon()}</Text>
                </View>
                <View style={styles.billingTxtBorder}>
                  <Text style={styles.billDetailTxt}>Tax</Text>
                  <Text style={styles.pricingStyl}>₹{ItemTax()}</Text>
                </View>

                <View style={styles.billingTxtBorder}>
                  <Text style={styles.billingTotalTxt}>Sub Total</Text>
                  <Text style={styles.totalPricingStyl}>₹{TotalBilling()}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
