import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  Modal,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {removeToCart} from '../../../../redux/action/Action.js';
import GroceryProduct from '../../../../data/GroceryProduct.js';
import {
  increaseToCart,
  decreaseToCart,
  cartBillingDetails,
} from '../../../../redux/action/Action.js';
import styles from './styles.js';
import image from '../../../../config/Image.js';
import BillInfo from '../../../../components/BillInfo';
import LoginButton from '../../../../components/LoginButton';

const Cart = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartData.cartProducts);
  //console.log('cart--->', cart);
  const {goBack} = useNavigation();

  const decreaseCartItem = item => {
    if (item.quantity >= 1) {
      dispatch(decreaseToCart(item.id));
    } else {
      dispatch(removeToCart(item.id));
    }
  };

  const closeModal = () => {
    setIsModalVisible(false), navigation.navigate('Select Address');
  };
  const openModal = () => {
    //setIsModalVisible(true)
    navigation.navigate('Select Address');
  };

  const calculateUserTotalPrice = () => {
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
  const calculateDeliveryRate = () => {
    return 10;
  };
  const calculateCoupon = () => {
    return 10;
  };
  const calculateTax = () => {
    let total = calculateUserTotalPrice();
    return (total * 12) / 100;
  };
  const calculateSubTotal = () => {
    return calculateUserTotalPrice() + calculateDeliveryRate() + calculateTax();
  };

  const removeList = item => {
    dispatch(removeToCart(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.mainMargin}>
          <View style={styles.leftIconStyle}>
            <AntDesign name="left" size={20} onPress={() => goBack()} />
            <Text style={styles.cartTextStyle}>Cart</Text>
          </View>
          <View>
            <View style={styles.vegetableImage}>
              <Image source={image.image3} style={styles.freshImage} />
              <Text style={styles.superImageStyle}>Super Fresh</Text>
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
                            source={{uri: item.imageUrl}}
                            style={styles.fruitImage}
                            resizeMode="center"
                          />
                        </View>
                        <View style={styles.itemStyle}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <Text style={styles.dollarText}>{item.price}</Text>
                        </View>

                        <View>
                          <View style={styles.counting}>
                            <View style={styles.addButton}>
                              <TouchableOpacity
                                onPress={() => decreaseCartItem(item)}>
                                <Text style={styles.minus}> - </Text>
                              </TouchableOpacity>
                            </View>

                            <Text style={styles.number}>{item.quantity}</Text>
                            <View style={styles.increase}>
                              <TouchableOpacity
                                onPress={() =>
                                  dispatch(increaseToCart(item.id))
                                }>
                                <Text style={styles.plus}> + </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
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
              <BillInfo title="Total" onPress={calculateUserTotalPrice} />
              <BillInfo
                title="Delivery Charge"
                onPress={calculateDeliveryRate}
              />
              <BillInfo title="Coupon" onPress={calculateCoupon} />
              <BillInfo title="Tax" onPress={calculateTax} />

              <View style={styles.billingStyling}>
                <Text styles={styles.billingText}>Sub Total</Text>
                <Text styles={styles.priceTotal}>${calculateSubTotal()}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutText}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.subTotalText}>₹ {calculateSubTotal()}</Text>
          <Text style={styles.saveText}>You save $ 5 on this</Text>
        </View>
        <View style={styles.checkoutButton}>
          <LoginButton
            name="Checkout"
            onPress={() => {
              const billingDetails = {
                subTotal: calculateUserTotalPrice(),
                tax: calculateTax(),
                coupon: calculateCoupon(),
                deliveryCharges: calculateDeliveryRate(),
                totalAmount: calculateSubTotal(),
                cart,
              };
              console.log('productData--->', cart);
              //dispatch(orderProduct(cart));
              dispatch(cartBillingDetails(billingDetails, cart));
              navigation.navigate('Select Address');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
