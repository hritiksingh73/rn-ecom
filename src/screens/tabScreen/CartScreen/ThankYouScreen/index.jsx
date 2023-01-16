import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {orderHistory} from '../../../../redux/action/Action.js';
import OrderDetails from '../../../../components/OrderDetails/index';
import image from '../../../../config/Image.js';

const ThankYouScreen = ({navigation}) => {
  const {goBack} = useNavigation();

  const dispatch = useDispatch();
  const orderDetails = useSelector(state => state.orderData.orders);
  console.log('orderDetails------->>>>>>>>', orderDetails);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AntDesign name="left" size={20} onPress={() => goBack()} />
          <Text style={styles.headingText}>Thank You</Text>
        </View>

        <Image source={image.hands} style={styles.handStyle} />
        <Text style={styles.headingText}>Congratulations!</Text>
        <Text style={styles.orderText}>Your order has been placed</Text>
        <OrderDetails text="Order ID" value={orderDetails.orderID.id} />
        <OrderDetails
          text="Order Placed On"
          value={orderDetails.deliveryDate.month}
          // {orderDetails.deliveryDate.date}
        />
        <OrderDetails text="Payment" value={orderDetails.orderID.payment} />
        <OrderDetails
          text="SubTotal"
          value={orderDetails.billingDetails.subTotal}
        />
        <OrderDetails text="Tax" value={orderDetails.billingDetails.tax} />
        <OrderDetails
          text="Delivery Charge"
          value={orderDetails.billingDetails.deliveryCharges}
        />
        <OrderDetails
          text="Total Amount"
          value={orderDetails.billingDetails.totalAmount}
        />

        <View style={styles.btnStyle}>
          <View>
            <Button
              title="Continue Shopping"
              color="green"
              onPress={() => navigation.navigate('Home Screen')}
            />
          </View>
          <View style={styles.buttonText}>
            <Button
              title="OK"
              color="white"
              onPress={() => dispatch(orderHistory(orderDetails))}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
