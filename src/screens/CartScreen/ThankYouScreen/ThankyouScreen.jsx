import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ImagePath from '../../../config/Image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const ThankyouScreen = () => {
  const navigation = useNavigation();
  const cartDeliveryDate = useSelector(state => state.OrderInfo.orders);
  console.log('cartDeliveryDate------->>>>>>>>', cartDeliveryDate);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Thank you</Text>
      </View>
      <Image source={ImagePath.orderPlaced} style={styles.orderPlacedImage} />
      <Text style={styles.orderConformationHeading}>Congratulations! </Text>

      <Text style={styles.orderConformationSubHeading}>
        Your Order has been placed.
      </Text>

      <View style={styles.orderid}>
        <Text style={styles.finalOrderText}>Order Id</Text>
        <Text style={styles.finalOrderText}>{cartDeliveryDate.orderID.id}</Text>
      </View>
      <View style={styles.orderid}>
        <Text style={styles.finalOrderText}>Payment Type</Text>
        <Text style={styles.finalOrderText}>
          {cartDeliveryDate.orderID.paymentmethod}
        </Text>
      </View>

      <View style={styles.orderid}>
        <Text style={styles.finalOrderText}>Order Placed on</Text>
        <Text style={styles.finalOrderText}>
          {cartDeliveryDate.deliveryDateSlot.month}{' '}
          {cartDeliveryDate.deliveryDateSlot.date}
        </Text>
      </View>

      <View style={styles.orderid}>
        <Text style={styles.finalOrderText}>Store Name</Text>
        <Text style={styles.finalOrderText}>Super Fresh Hampden</Text>
      </View>
    </SafeAreaView>
  );
};

export default ThankyouScreen;
