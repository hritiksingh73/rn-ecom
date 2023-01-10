import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import CheckoutTimeline from '../../../components/CheckoutTimeline';
import CheckoutSelectedAddress from '../CheckoutSelectedAddress';
import CheckoutSelectDeliverySlot from '../CheckoutSelectDeliverySlot';
import CheckoutPayment from '../CheckoutPayment';
import {useDispatch, useSelector} from 'react-redux';
import {CheckoutDetails} from '../../../redux/action/action';

const CheckoutScreen = ({navigation}) => {
  const [screenName, setScreenName] = useState('Address');  

  const dispatch = useDispatch();
  const checkoutDetails = useSelector(
    state => state.orderDetails.checkoutDetails,
  );

  const SelectIcon = () => {
    alert('Hello')
  } 

  const generateOrderID = () => {
    // var orderID = 'orderId' + new Date().getTime();
    // const details = {
    //   orderID: orderID,
    //   checkoutID: checkoutDetails.checkoutID,
    //   time: checkoutDetails.item,
    //   deliveryType: checkoutDetails.deliveryType,
    // };
    // dispatch(CheckoutDetails(details))
  } 


  
  return (
    <SafeAreaView>
      <ScrollView>
        <CheckoutTimeline name={screenName} onPress={SelectIcon}/>

        {screenName === 'Address' ? (
          <CheckoutSelectedAddress />
        ) : screenName === 'Delivery' ? (
          <CheckoutSelectDeliverySlot />
        ) : (
          <CheckoutPayment />
        )}

        <View style={styles.buttonContainer}>
          <PrimaryButton
            name={
              screenName === 'Address' || screenName === 'Delivery'
                ? 'Save & Next'
                : 'Place Order'
            }
            onPress={() => {
              screenName === 'Address'
                ? setScreenName('Delivery')
                : screenName === 'Delivery'
                ? setScreenName('Payment')
                : setScreenName('Payment');
                if(screenName === 'Payment'){
                  generateOrderID();
                  navigation.navigate('Thankyou');

                }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
});
