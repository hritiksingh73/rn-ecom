import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../../components/PrimaryButton';

const OrderHistoryScreen = ({navigation}) => {
  const orderHistory = useSelector(state => state.orderData.orders);
  console.log('orderHistory---->', orderHistory.billingDetails);

  const dispatch = useDispatch();
  const latestOrders = useSelector(state => state.orderData.latestOrders);
  console.log('latestOrders---->', latestOrders.billingDetails);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <AntDesign name="left" size={25} onPress={() => goBack()} />
        <Text style={styles.headingText}>Order History</Text>
      </View>
      <FlatList
        data={orderHistory}
        renderItem={({item}) => {
          return (
            <View style={styles.mainOrderContainer}>
              <View style={styles.orderContainer}>
                <Text style={styles.orderIdStyle}>
                  Order ID:
                  {item.orderID.id}
                </Text>
                <Text>{item.billingDetails.subTotal}</Text>
              </View>
              <Text style={styles.dateStyle}>
                {item.deliveryDate.date} {item.deliveryDate.month}{' '}
                {item.deliveryDate.day}
              </Text>
              <Text style={styles.statusStyle}>Status: Placed</Text>
              <View style={styles.btnContainer}>
                <PrimaryButton
                  name="View Details"
                  onPress={() =>
                    navigation.navigate('Order Detail', {
                      id: item.orderID.id,
                    })
                  }
                />
                <Text style={styles.rateStyle}>Rate this Order</Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;
