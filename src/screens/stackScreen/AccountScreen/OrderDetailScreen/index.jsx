import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import image from '../../../../config/Image.js';
import {getInitialData} from '../../../../redux/thunk/productThunk.js';
import {useNavigation} from '@react-navigation/native';
import OrderDetails from '../../../../components/OrderDetails/index';

const OrderDetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector(state => state.orderData.orders);
  console.log('orderDetails---->', orderDetails);

  const {selectedAddress, billingDetails} = useSelector(
    state => state.orderData.latestOrders,
  );

  const id = route.params.id;
  console.log('id===>', id);

  const currentDetail = orderDetails.filter(item => item.orderID.id === id);

  console.log('currentDetail=======>>>>>>>>', currentDetail);

  const flatlistData = currentDetail[0];
  const cartData = flatlistData.billingDetails.cart;
  console.log('flatlistData=======>>>>>>>>', cartData);

  const popularProducts = ({item}) => {
    console.log('data--->', item);
    return (
      <View style={styles.imageBoxStyle}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.image} />

          <Text style={styles.titleText} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text style={styles.quantity}>QTY: {item.quantity}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <AntDesign
            name="left"
            size={20}
            onPress={() => goBack()}
            style={styles.leftIconStyle}
          />
          <Text style={styles.headingText}>Order Detail</Text>
        </View>
        <View style={styles.mainOrderContainer}>
          <View style={styles.orderContainer}>
            <Text style={styles.orderIdStyle}>
              Order ID:
              {id}
            </Text>
            <Text style={styles.orderIdStyle}>${billingDetails.subTotal}</Text>
          </View>
        </View>
        <View style={styles.mainContainerImageStyle}>
          <Image source={image.vegetable} style={styles.freshImageStyle} />
          <View style={styles.headingTextStyle}>
            <Text style={styles.superFreshTextStyle}>Super Fresh</Text>
          </View>
       
        <View style={styles.itemLengthStyle}>
              <Text>{cartData.length} Items</Text>
            </View>
            </View>
        <FlatList
          data={cartData}
          renderItem={item => popularProducts(item)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
        <Text style={styles.headingStyle}>Shipping Detail</Text>
        <View style={styles.addressStyle}>
          <Text style={styles.textStyle}>
            {selectedAddress.firstname} {selectedAddress.lastname}
          </Text>
          <Text style={styles.addressTextStyle}>
            {selectedAddress.mobileno}, {selectedAddress.area},
            {selectedAddress.address}, {selectedAddress.street},{' '}
            {selectedAddress.house}, {selectedAddress.block}
          </Text>
        </View>

        <Text style={styles.headingStyle}>Price Detail</Text>
        <OrderDetails text="Total" value={billingDetails.totalAmount} />
        <OrderDetails
          text="Delivery Charges"
          value={billingDetails.deliveryCharges}
        />
        <OrderDetails text="Coupon" value={billingDetails.coupon} />
        <OrderDetails text="Tax" value={billingDetails.tax} />
        <OrderDetails text="Sub Total" value={billingDetails.subTotal} />

        <Text style={styles.headingStyle}>Payment Mode</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
