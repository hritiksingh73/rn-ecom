import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {removeToCart} from '../../redux/action/Action.js';
import Data from '../../homeData/Data.js';
import {increaseToCart, decreaseToCart} from '../../redux/action/Action.js';
import styles from './styles.js';
import firestore from '@react-native-firebase/firestore';
import {ScrollView} from 'react-native-virtualized-view';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.userData.cartProducts);

  const UserTotalPrice = () => {
    const ItemTotalPrice = cart.map(value => {
      let total = value.price * value.quantity;
      return total;
      console.log(ItemTotalPrice);
    });
    const TotalItemPrices = ItemTotalPrice.reduce((total, value) => {
      return total + value;
    }, 0);
    return TotalItemPrices;
  };

  const Tax = () => {
    let total = UserTotalPrice();
    return (total * 12) / 100;
  };
  const SubTotal = () => {
    return UserTotalPrice() + DeliveryRate() + Tax();
  };

  const removeList = item => {
    dispatch(removeToCart(item));
    // console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainMargin}>
          <View>
            <Text style={styles.cart}>Cart</Text>
          </View>
          <View>
            <View style={styles.vegetableImage}>
              <Image
                source={require('../../assets/image3.jpeg')}
                style={styles.freshImage}
              />
              <Text style={styles.superImage}>Super Fresh</Text>
            </View>
            <View>
              <FlatList
                data={cart}
                ItemSeparatorComponent={() => {
                  return <View style={styles.itemDivide}></View>;
                }}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <View style={styles.mainList}>
                        <View style={styles.imageStyle}>
                          <Image
                            source={item.image}
                            style={styles.fruitImage}
                            resizeMode="center"
                          />
                        </View>
                        <View style={styles.itemStyle}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <Text style={styles.dollarText}>{item.price}</Text>
                        </View>
                        {/* <TouchableOpacity
                          style={styles.remove}
                          onPress={() => {
                            removeList(item.id);
                            console.log(item.id);
                          }}>
                          <Text style={styles.delete}>Remove</Text>
                        </TouchableOpacity> */}
                      </View>
                      <View style={styles.counting}>
                        <View style={styles.addButton}>
                          <TouchableOpacity
                            style={styles.increaseButton}
                            style={styles.minusButton}
                            onPress={() =>
                              dispatch(
                                decreaseToCart(item.id),
                                // console.log(item.id),
                              )
                            }>
                            <Text style={styles.minus}> - </Text>
                          </TouchableOpacity>
                        </View>

                        <Text style={styles.number}>{item.quantity}</Text>
                        <View style={styles.increase}>
                          <TouchableOpacity
                            onPress={() =>
                              dispatch(
                                increaseToCart(item.id),
                                // console.log(item.id),
                              )
                            }>
                            <Text style={styles.plus}> + </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
              <View style={styles.coupon}>
                <View style={styles.couponBlock}>
                  <Icon name="creditcard" size={20} />
                  <TextInput
                    style={styles.couponInput}
                    placeholder="Coupon Code"
                    placeholderTextColor="black"
                  />
                </View>
                <TouchableOpacity>
                  <Text style={styles.apply}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.billing}>
              <Text style={styles.billingText}>Bill Details</Text>
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingTextStyling}>Total</Text>
              <Text>${UserTotalPrice()}</Text>
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingTextStyling}>Delivery Charge</Text>
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingTextStyling}>Coupon</Text>
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingTextStyling}>Tax</Text>
              <Text>${Tax()}</Text>
            </View>
            <View style={styles.billingStyling}>
              <Text styles={styles.billingTextStyling}>Sub Total</Text>
              <Text>${SubTotal()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalBlock}>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>${SubTotal()}</Text>
            <Text style={styles.save}>You Save $ 5 on this</Text>
            <TouchableOpacity>
              <Text style={styles.checkout}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
