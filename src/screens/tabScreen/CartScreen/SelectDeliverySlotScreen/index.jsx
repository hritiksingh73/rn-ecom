import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import time from '../../../../data/time.js';

import dateDay from '../../../../components/DateDay';
import {useNavigation} from '@react-navigation/native';
import Indicator from '../../../../../src/components/Indicator/index';
import moment from 'moment';
import {deliveryDate, deliveryTime} from '../../../../redux/action/Action.js';

const SelectDeliverySlotScreen = ({navigation}) => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.orderData.latestOrders)
  //console.log('deliverData--->', cart.billingDetails)
  
  const dateData = ({item}) => {
    //console.log({item})
    return (
      <View style={styles.deliveryDateStyle}>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => dispatch(deliveryDate(item))}>
            <Text style={styles.dayStyle}>{item.day}</Text>
            <Text style={styles.dateStyle}>
              {item.date} {item.month}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const timeData = ({item}) => {
    return (
      <View style={styles.deliveryTimeSlotContainer}>
        <TouchableOpacity
          style={styles.deliveryTimeContainer}
          //onPress={() => dispatch(deliveryTime(item))}
          >
          <Text style={styles.timeStyle}>{item.time}</Text>
          <Text style={styles.priceStyle}>{item.price}</Text>
        </TouchableOpacity>

        <View style={styles.btnText}>
          <Button title="Choose" color="grey" onPress={() => dispatch(deliveryTime(item))}/>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <ScrollView> */}
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
      <Text style={styles.headingStyle}>Reserve your delivery slot</Text>
      <FlatList
        data={dateDay}
        renderItem={dateData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList data={time} renderItem={timeData} />
      <View style={styles.btnStyle}>
        <Button
          title="Save & Next"
          color="white"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SelectDeliverySlotScreen;
