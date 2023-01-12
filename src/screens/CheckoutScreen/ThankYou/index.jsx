import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

import image from '../../../config/image';
import {globalStyle} from '../../../constant/globalStyle';
import CustomButton from '../../../components/Button';
import {styles} from './styles';
import OrderDetails from '../../../components/OrderDetails';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ThankYou = () => {
  const navigation = useNavigation();
  const orderDetail = useSelector(state => state.ordersReducer.latestOrder);
  console.log(orderDetail);

  return (
    <ScrollView style={globalStyle.container}>
      <View style={styles.imgContainer}>
        <Image source={image.thankYou} style={styles.imgStyle} />
        <Text style={styles.congratulations}>Congratulations!</Text>
        <Text style={styles.orderPlacedTxt}>Your Order has been placed.</Text>
      </View>

      <OrderDetails orderDetail="Order ID" details={orderDetail.orderId} />
      <OrderDetails
        orderDetail="Order Placed on"
        details={orderDetail.deliverySlot}
      />
      <OrderDetails orderDetail="Store name" details="Super Fresh" />
      <OrderDetails orderDetail="Subtotal" />
      <OrderDetails orderDetail="Tax" />
      <OrderDetails orderDetail="Delivery Charges" />
      <OrderDetails orderDetail="Total Amount" />

      <View style={styles.btnContainer}>
        <CustomButton
          btnTitle="Continue Shopping"
          onPress={() => navigation.navigate('Popular Products')}
        />
        <CustomButton btnTitle="OK" />
      </View>
    </ScrollView>
  );
};
export default ThankYou;
