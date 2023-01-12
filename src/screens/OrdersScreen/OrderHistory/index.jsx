import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';

import CustomButton from '../../../components/Button';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';

const OrderHistory = () => {
  const navigation = useNavigation();
  const orders = useSelector(state => state.ordersReducer.orders);
  console.log('orders------>', orders);

  const renderOrderHistory = ({item}) => {
    return (
      <>
        <View style={styles.renderItemContainer}>
          <Text style={styles.orderId}>Order ID: {item.orderId}</Text>
          <Text style={styles.date}>{item.deliverySlot}</Text>
          <Text style={styles.orderStatus}>Status: {item.status}</Text>

          <View style={styles.btnContainer}>
            <CustomButton
              btnTitle="View Details"
              onPress={() => navigation.navigate('Order Detail')}
            />
            <Text style={styles.rating}>Rate this Order</Text>
          </View>
        </View>
        <Divider />
      </>
    );
  };

  return (
    <View style={globalStyle.container}>
      <FlatList data={orders} renderItem={renderOrderHistory} />
    </View>
  );
};
export default OrderHistory;
