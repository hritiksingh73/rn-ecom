import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {PaymentMethod, CheckoutDetails} from '../../../redux/action/action';
import {RadioButton} from 'react-native-paper';
import colors from '../../../constants/colors';

const Payment = () => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const selectedAddress = useSelector(
    state => state.orderDetails.selectedAddress,
  );
  const deliveryDate = useSelector(state => state.orderDetails.deliveryDate);
  const deliveryTime = useSelector(state => state.orderDetails.deliveryTime);
  const paymentMethod = useSelector(state => state.orderDetails.paymentMethod);

  const [checked, setChecked] = useState('first');

  const deliveryTypeHandler = val => {
    dispatch(PaymentMethod(val));
  };

  const SubmitDetails = () => {
    var orderID = 'orderID' + new Date().getTime();

    const orderDetails = {
      orderID: orderID,
      selectedAddress: selectedAddress,
      deliverySlot: {
        time: deliveryTime,
        date: deliveryDate.date,
        day: deliveryDate.day,
        month: deliveryDate.month,
      },
      paymentMethod: paymentMethod,
    };
    dispatch(CheckoutDetails(orderDetails));
  };

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Choose Payment Option</Text>
      {/* <RadioButton
        value="first"
        color={colors.green}
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        color={colors.green}
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /> */}

      <View style={styles.container}>
        <View style={styles.radioBtnContainer}></View>
        <View style={[styles.titleContainer, {width: width - 120}]}>
          <TouchableOpacity onPress={() => deliveryTypeHandler('Via Cart')}>
            <Text style={styles.title}>Via Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.radioBtnContainer}></View>
        <View style={[styles.titleContainer, {width: width - 120}]}>
          <TouchableOpacity
            onPress={() => deliveryTypeHandler('Via UPI Option')}>
            <Text style={styles.title}>Via UPI Option</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.radioBtnContainer}></View>
        <View style={[styles.titleContainer, {width: width - 120}]}>
          <TouchableOpacity
            onPress={() => deliveryTypeHandler('Cash On Delivery')}>
            <Text style={styles.title}>Cash On Delivery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <PrimaryButton name="testing" onPress={SubmitDetails} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 20,
    borderWidth: 1,
    borderRadius: 3,
  },
  radioBtnContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
  },
  titleContainer: {
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Payment;
