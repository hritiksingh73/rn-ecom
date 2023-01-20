import {View, Text, TouchableOpacity, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../OrderDetailsScreen/styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import CartBillingData from '../../../../component/CartBillingData/CartBillingData';
import { ScrollView } from 'react-native-virtualized-view';
const OrderDetailScreen = ({route}) => {
  const receivedproductOrderId = route.params;
  const orderDetail = useSelector(state => state.OrderInfo.orderHistory);
  const navigation = useNavigation();

  //const currentOrderDetail = orderDetail.filter(item => orderDetail.orderID.id !== receivedproductOrderId);

 // console.log('currentOrderDetail=======>>>>>>>>', currentOrderDetail )

  console.log(
    'Order Detail Screen=======>>>>>>>>',
    orderDetail
    //.orderID.id
  );

  const orderDetailContainer = ({item}) => {
    
    //console.log(item.orderDetails.CalculateDeliveryCharges.item[0].imageUrl);
    return (
      <View style={styles.relatedItemContainer}>
        {/* <View style={styles.relatedItemImagecard}>
          <Image source={{uri: item.orderDetails.CalculateDeliveryCharges.item[0].imageUrl}} style={styles.imgStyle} />
          <Text style={styles.relatedItemImageTitle}>{item.title}</Text>

          <View style={styles.relatedItemPriceBracket}>
            <Text style={styles.relatedItemprice}>${item.price} each</Text>
          </View>
        </View> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={21} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Order Detail</Text>
      </View>
      <View style={styles.headerTitleContainer}>
        {/* <Text style={styles.orderId}>Order ID: {receivedproductOrderId}</Text> */}
        {/* <Text style={styles.totalAmount}>
          $ 
          {
             orderDetail.orderDetails.CalculateDeliveryCharges.CalculateSubTotal
          }
        </Text> */}
      </View>

      <FlatList
        data={orderDetail}
        renderItem={orderDetailContainer}
        horizontal={true}
        keyExtractor={item => item.id}
      />
      <Divider />

      {/* <Text style={styles.shippingDetailHeader}>Shipping Detail</Text>
      <View style={styles.addressContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>
            {orderDetail.selectedDeliveryAddress.firstName}{' '}
            {orderDetail.selectedDeliveryAddress.lastName}{' '}
          </Text>
        </View>
        <Text>
          {orderDetail.selectedDeliveryAddress.area}{' '}
          {orderDetail.selectedDeliveryAddress.address}{' '}
          {orderDetail.selectedDeliveryAddress.block}
        </Text>
        <Text>
          {orderDetail.selectedDeliveryAddress.street}{' '}
          {orderDetail.selectedDeliveryAddress.appartment}
        </Text>
      </View> */}

      <Divider />

      <Text style={styles.shippingDetailHeader}>Price Detail</Text>
{/* 
      <CartBillingData
        text="Total"
        Count={
          '$' +
          orderDetail.orderDetails.CalculateDeliveryCharges.CalculateSubTotal
        }
      />
      <CartBillingData
        text="Delivery Charge"
        Count={orderDetail.deliveryTimeSlot.deliveryCharges}
      />
      <CartBillingData
        text="Delivery Charge"
        Count={orderDetail.deliveryTimeSlot.deliveryCharges}
      />
      <CartBillingData
        text="Delivery Charge"
        Count={orderDetail.deliveryTimeSlot.deliveryCharges}
      />
      <CartBillingData
        text="Tax"
        Count={
          '$' +
          orderDetail.orderDetails.CalculateDeliveryCharges
            .CalculateDeliveryCharges
        }
      />

      <Text style={styles.paymentMode}>Payment Mode</Text>
      <Text style={styles.paymentMethod}>
        {orderDetail.orderID.paymentmethod}
      </Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
