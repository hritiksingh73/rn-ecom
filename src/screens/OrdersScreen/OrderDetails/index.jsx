import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, View, Image, Text, ScrollView} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';

import BillDetails from '../../../components/BillDetails';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';

const OrderDetails = () => {
  const cartProducts = useSelector(
    state => state.cartProductReducer.cartProducts,
  );
  const {selectedAddress, priceDetail} = useSelector(
    state => state.ordersReducer.latestOrder,
  );
  const id = useRoute().params.id;

  const renderListItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
      <Text style={globalStyle.itemFontSize}>{item.title}</Text>
      <Text style={[globalStyle.priceTxt, globalStyle.itemFontSize]}>
        {item.price}
      </Text>
      <Text style={[globalStyle.itemFontSize, styles.qty]}>
        QTY: {item.qty}
      </Text>
    </View>
  );

  return (
    <ScrollView style={globalStyle.container}>
      <View style={styles.topDetailContainer}>
        <Text style={styles.topDetail}>Order ID: {id}</Text>
        <Text style={styles.topDetail}>${priceDetail.subTotal}</Text>
      </View>

      <FlatList
        data={cartProducts}
        horizontal
        renderItem={renderListItem}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={[globalStyle.headerText, globalStyle.header]}>
        Shipping Detail
      </Text>

      <View style={styles.addressContainer}>
        <Text style={globalStyle.nameStyle}>
          {selectedAddress.firstName}
          {selectedAddress.lastName}
        </Text>
        <Text style={globalStyle.itemFontSize}>
          {selectedAddress.addressType}
          {selectedAddress.street}
          {selectedAddress.area}
          {selectedAddress.house}
          {selectedAddress.block}
        </Text>
      </View>
      <Divider />
      <Text style={[globalStyle.header, styles.heading]}>Price Detail</Text>
      <BillDetails detail="Total" price={priceDetail.total} />
      <BillDetails
        detail="Delivery Charge"
        price={priceDetail.deliveryCharge}
      />
      <BillDetails detail="Coupon" price="Not Available" />
      <BillDetails detail="Tax" price={priceDetail.tax} />
      <BillDetails detail="Sub Total" price={priceDetail.subTotal} />

      <Text style={[globalStyle.header, styles.heading]}>Payment Mode</Text>
    </ScrollView>
  );
};
export default OrderDetails;
