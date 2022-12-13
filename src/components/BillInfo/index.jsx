import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BillInfo = props => {
  const {title, functionName} = props;
  return (
    <View style={styles.billingStyling}>
      <Text style={styles.billingTextStyling}>{title}</Text>
      <Text style={styles.priceTotal}>₹{functionName()}</Text>
    </View>
  );
};

export default BillInfo;