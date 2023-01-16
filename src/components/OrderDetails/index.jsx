import React from 'react';
import {Text, View} from 'react-native';


import styles from './styles';

const OrderDetails = ({text, value}) => {
  return (
    <>
      <View style={styles.orderStyle}>
        <Text style={styles.orderTextStyle}>{text}</Text>
        <Text style={styles.orderTextStyle}>{value}</Text>
      </View>
      
    </>
  );
};
export default OrderDetails;