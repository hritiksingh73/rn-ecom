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
import firestore from '@react-native-firebase/firestore';
import LoginBtn from '../../../components/loginBtn';
import BillingDetail from '../../../components/billingDetailField';

const CartScreen = () => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');
  const data = useSelector(state => state.user.fruitCart);
  const cartData = useSelector(state => state.user.fruitCart);

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

  const Coupon = () => {
    if (couponCode === '') {
      return 0;
    } else {
      if (couponCode === 'Coupon10') {
        return (TotalItemPrices * 10) / 100;
      } else {
        if (couponCode === 'Coupon15') {
          return (TotalItemPrices * 15) / 100;
        } else {
          if (couponCode === 'Coupon20') {
            return (TotalItemPrices * 20) / 100;
          } else {
            alert('you enter wrong CouponCode');
            return 0;
          }
        }
      }
    }
  };

  const IsCouponApplied = () => {};
  
  const DeliveryCharge = () => {
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
                            onPress={() => {
                              dispatch(DecrementCartItem(item.id));
                              firestore()
                                .collection('Cart')
                                .doc('ABC')
                                .set({cartData});
                            }}>
                            <Text style={styles.dec}>- </Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.num}>{item.numberOfItem}</Text>
                        <View style={styles.incrementBtnStyle}>
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(IncrementCartItem(item.id));
                              firestore()
                                .collection('Cart')
                                .doc('ABC')
                                .set({cartData});
                            }}>
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
                    onChangeText={val => {
                      setCouponCode(val);
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Coupon;
                  }}>
                  <Text style={styles.applyBtn}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.billingBoxStyling}>
              <Text style={styles.billBoxHeader}>Bill Details</Text>
              <BillingDetail name={'Total'} myFunction={UserItemPrice}/>
              <BillingDetail name={'Delivery Charge'} myFunction={DeliveryCharge}/>
              <BillingDetail name={'Coupon'} myFunction={Coupon}/>
              <BillingDetail name={'Tax'} myFunction={ItemTax}/>
              <View style={[styles.billingTxtBorder, {borderBottomWidth: 0}]}>
                <Text style={styles.billingTotalTxt}>Sub Total</Text>
                <Text style={styles.totalPricingStyl}>₹{TotalBilling()}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.checkoutTxtBorder}>
        <View>
          <Text style={styles.totClr}>Total</Text>
          <Text style={styles.checkoutTotalTxt}>₹ {TotalBilling()}</Text>
          <Text style={styles.totMsg}>You save $ 5 on this</Text>
        </View>
        <View style={styles.topMrgn}>
          <LoginBtn name={'Checkout'} />
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
