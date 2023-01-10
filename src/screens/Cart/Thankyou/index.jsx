import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyle from '../../../constants/globalStyle';
import images from '../../../config/images';
import colors from '../../../constants/colors';
import PrimaryButton from '../../../components/PrimaryButton';

const Thankyou = () => {
  const orderDetails = useSelector(state => state.orderDetails.orderDetails);

  const orderDetailsByIndex = orderDetails[orderDetails.length - 1];
  const orderID = orderDetailsByIndex.orderID;
  const time = `${orderDetailsByIndex.deliverySlot.month} ${orderDetailsByIndex.deliverySlot.date} ${orderDetailsByIndex.deliverySlot.day}`;
  const deliveryType = orderDetailsByIndex.paymentMethod;
  const address = `${orderDetailsByIndex.selectedAddress.apartment}, ${orderDetailsByIndex.selectedAddress.block}-block ${orderDetailsByIndex.selectedAddress.street} ${orderDetailsByIndex.selectedAddress.area} ${orderDetailsByIndex.selectedAddress.addressType}`;

  console.log('All OrderDetails::::::: ', orderDetails);

  const OrderDeatils = ({title, value}) => {
    return (
      <View style={styles.orderDetailContainer}>
        <Text style={styles.flexSeperator}>{title}</Text>
        <Text style={styles.flexSeperator}>{value}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyle.outerContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={images.thankyou} />
        </View>

        <View style={styles.greetingContainer}>
          <Text style={globalStyle.heading}>Congratulations!</Text>
          <Text style={styles.message}>Your Order has been placed.</Text>
        </View>

        <OrderDeatils title="Order ID" value={orderID} />
        <OrderDeatils title="Order Placed on" value={time} />
        <OrderDeatils title="Delivery type" value={deliveryType} />
        <OrderDeatils title="Address" value={address} />
        {/* <OrderDeatils title='Order ID' value={time}/>
        <OrderDeatils title='Order Placed on' value={time}/>
        <OrderDeatils title='Store name' value='12345678'/>
        <OrderDeatils title='Subtotal' value='12345678'/>
        <OrderDeatils title='Tax' value='12345678'/>
        <OrderDeatils title='Delivery Charges' value='12345678'/>
        <OrderDeatils title='Total Amount' value='12345678'/> */}

        <View style={{margin: 10}}>
          <PrimaryButton name="Continue Shopping" />
          <PrimaryButton name="OK" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  greetingContainer: {
    alignItems: 'center',
  },
  message: {
    marginVertical: 10,
    marginBottom: 30,
    fontSize: 17,
  },
  orderDetailContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.gray_85,
  },
  flexSeperator: {
    flex: 1,
  },
});

export default Thankyou;
