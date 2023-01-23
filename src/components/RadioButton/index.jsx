import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {orderId, getPayment} from '../../redux/action/Action.js';
import {useDispatch} from 'react-redux';
import {orderpaymentId} from '../../utils/guidGenerator';
import styles from './styles';

const RadioBtn = () => {
  const [checked, setChecked] = useState('first');
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => setChecked('first')}>
        <View style={styles.mainCardStyle}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() =>
              dispatch(orderId(orderpaymentId(), 'Cash On delivery'))
              
            }
          />
          <Text style={styles.paymentStyle}>Cash On Delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setChecked('second')}>
        <View style={styles.mainCardStyle}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => 
             dispatch(orderId(orderpaymentId(), 'ATM'))
              
            }
          />
          <Text style={styles.paymentStyle}>ATM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioBtn;
