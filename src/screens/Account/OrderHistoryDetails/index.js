import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../../components/PrimaryButton';
// import styles from './styles';

const OrderHistoryDetails = () => {
  const orderDetails = useSelector(state => state.orderDetails.orderDetails);

  return (
    <SafeAreaView>
      <Text>hello OrderHistory details</Text>
    </SafeAreaView>
  );
};

export default OrderHistoryDetails;
