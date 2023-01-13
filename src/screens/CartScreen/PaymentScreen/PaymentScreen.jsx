import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {orderId} from '../../../redux/action/Action';
import { useDispatch } from 'react-redux';
import {orderpaymentId} from "../../../utils/uidGenerator"
const PaymentScreen = () => {
  const [checked, setChecked] = useState('first');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //console.log(uidGenerator())
  return (
    <SafeAreaView>
      <Text style={styles.headerTitle}>Payment Method</Text>

      <TouchableOpacity onPress={() => setChecked('first')}>
        <View style={styles.paymentmethod}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(orderId(orderpaymentId(),"Cash On delivery"))}
          />
          <Text style={styles.paymentButtonText}>Cash On delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setChecked('second')}>
        <View style={styles.paymentmethod}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => dispatch(orderId(orderpaymentId(),"Pay Later"))}
          />
          <Text style={styles.paymentButtonText}>Pay Later</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.placeOrderButtonContainer}
        onPress={() => navigation.navigate('ThankyouScreen')}>
        <Text style={styles.placeOrderButton}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentScreen;
