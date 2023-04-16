import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.js';
import InputField from '../../../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import Indicator from '../../../../../src/components/Indicator/index';
import RadioBtn from '../../../../components/RadioButton';
import {
  getPayment,
  orderId,
  checkoutDetails,
} from '../../../../redux/action/Action.js';
import {orderpaymentId} from '../../../../utils/guidGenerator';

const PaymentScreen = ({navigation}) => {
  const {goBack} = useNavigation();
  const orderDetails = useSelector(state => state.orderData.latestOrders);
  //console.log('orderDetails------->>>>>>>>', orderDetails.billingDetails);

  const cart = useSelector(state => state.orderData.latestOrders)
 // console.log('paymentData--->', cart.billingDetails)
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <AntDesign
            name="left"
            size={20}
            onPress={() => goBack()}
            style={styles.leftIconStyle}
          />
          <Text style={styles.headingText}>Checkout</Text>
        </View>
        <Indicator />
        <Text style={styles.heading}>Saved Card</Text>
        
        <RadioBtn />

        <View style={styles.btnStyle}>
          <Button
            title="Place Order"
            color="white"
            onPress={() => {dispatch(checkoutDetails(orderDetails));
              navigation.navigate('Thank You')}
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
