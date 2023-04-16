import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';
import Indicator from '../../../../../src/components/Indicator/index';
import {
  selectAddress,
  setSelectedAddress,
} from '../../../../redux/action/Action.js';
import color from '../../../../constant/color.js';

const SelectAddressScreen = ({navigation}) => {
  const addAddress = useSelector(state => state.userData.userAddress);
  //console.log('add---->', addAddress.id)
  const cart = useSelector(state => state.orderData.latestOrders)
  //console.log('cartData--->', cart.billingDetails)
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  const addressHandler = item => {
    dispatch(setSelectedAddress(item));
  };

  const dataReceive = ({item}) => {
    return (
      <View
        style={[
          styles.addressStyle,
          select ? {borderColor: color.primary} : {borderColor: color.black},
        ]}>
        <Text style={styles.textStyle}>
          {item.firstname} {item.lastname}
        </Text>
        <Text style={styles.text}>
          {item.mobileno}, {item.area},{item.address}, {item.street},{' '}
          {item.house}, {item.block}
        </Text>

        <View style={styles.deliverBtnStyle}>
          <Button
            title="Deliver here"
            onPress={() => addressHandler(item)}
            color="white"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
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
      <FlatList
        data={addAddress}
        keyExtractor={item => item.id}
        renderItem={dataReceive}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <View style={styles.btnStyle}>
        <AntDesign name="pluscircleo" size={18} />
        <Button
          title="Add New Address"
          color="grey"
          onPress={() => navigation.navigate('Add Address')}
        />
      </View>
      <View style={styles.saveBtnStyle}>
        <Button
          title="Save & Next"
          color="white"
          onPress={() => navigation.navigate('Select Delivery Slot')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectAddressScreen;
