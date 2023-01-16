import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import image from '../../../../config/Image.js';
import {getInitialData} from '../../../../redux/thunk/productThunk.js';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../../components/PrimaryButton';

const OrderDetailScreen = () => {
  const dispatch = useDispatch();
  const addAddress = useSelector(state => state.userData.userAddress);
  const orderDetails = useSelector(state => state.orderData.orderDetails);
  //console.log('orderDetails---->', orderDetails)
  const dataItem = useSelector(state => state.cartData.productData);
  const {isFetching, productData} = useSelector(state => state.cartData);
  const cartProducts = useSelector(state => state.cartData.cartProducts);

  const addressData = ({item}) => {
    return (
      <View style={styles.addressStyle}>
        <Text style={styles.textStyle}>
          {item.firstname} {item.lastname}
        </Text>
        <Text style={styles.addressTextStyle}>
          {item.mobileno}, {item.area},{item.address}, {item.street},{' '}
          {item.house}, {item.block}
        </Text>
      </View>
    );
  };

  const popularProducts = ({item}) => {
    return (
      <View style={styles.imageBoxStyle}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />

        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <AntDesign name="left" size={25} onPress={() => goBack()} />
        <Text style={styles.headingText}>Order Detail</Text>
      </View>
      <View style={styles.mainOrderContainer}>
        <View style={styles.orderContainer}>
          <Text>
            Order ID:
            {/* {item.orderID} */}
          </Text>
          <Text>$25.00</Text>
        </View>
      </View>
      <View style={styles.mainContainerImageStyle}>
        <Image source={image.vegetable} style={styles.freshImageStyle} />
        <View>
          <Text style={styles.superFreshTextStyle}>Super Fresh</Text>
        </View>
      </View>
      <FlatList
        data={cartProducts}
        renderItem={item => popularProducts(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
      <Text style={styles.headingStyle}>Shipping Detail</Text>
      <FlatList
        data={addAddress}
        keyExtractor={item => item.id}
        renderItem={addressData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <Text style={styles.headingStyle}>Price Detail</Text>
      <View style={styles.orderStyle}>
        <Text>Total</Text>
        <Text style={styles.orderTextStyle}></Text>
      </View>
      <View style={styles.orderStyle}>
        <Text>Delivery Charge</Text>
        <Text style={styles.orderTextStyle}></Text>
      </View>
      <View style={styles.orderStyle}>
        <Text>Coupon</Text>
        <Text style={styles.orderTextStyle}></Text>
      </View>
      <View style={styles.orderStyle}>
        <Text>Tax</Text>
        <Text style={styles.orderTextStyle}></Text>
      </View>
      <View style={styles.orderStyle}>
        <Text> Sub Total</Text>
        <Text style={styles.orderTextStyle}></Text>
      </View>
      <Text style={styles.headingStyle}>Payment Mode</Text>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
