import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

import {
  increaseItemQuantity,
  DecreaseItemCountInCartAction,
} from '../../redux/action/Action';
import {ScrollView} from 'react-native-virtualized-view';
const Cart = () => {
  const item = useSelector(state => state.userInfo.cart);
  const dispatch = useDispatch();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainHeader}>
          <Arrow name="left" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Cart</Text>
        </View>
        <FlatList
          data={item}
          renderItem={({item, index}) => {
            return (
              <View style={styles.mainContainer}>
                <Image
                  source={{uri: item.image}}
                  style={styles.flatlistImage}
                />
                <View style={styles.container}>
                  <Text>{item.title}</Text>
                  <View style={styles.Quantityadjustment}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.Quantityadjustment}>
                      <TouchableOpacity
                        style={styles.decreaseButton}
                        onPress={() => {
                          // firestore()
                          //   .collection('Users')
                          //   .doc(userData.uid)
                          //   .update({
                          //     // 'info.address.zipcode': 94040,
                          //     'selecteditems.item.id': 94040,
                          //   })
                          //   .then(() => {
                          //     console.log('User updated!');
                          //   });
                          dispatch(DecreaseItemCountInCartAction(item.id));
                        }}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityupdate}>
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        style={styles.increarseButton}
                        onPress={() => dispatch(increaseItemQuantity(item.id))}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.coupon}>
          <View style={styles.couponBlock}>
            <Icon name="ticket-percent-outline" size={24} />
            <TextInput
              style={styles.couponInput}
              placeholder="Coupon Code"
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.billing}>
          <Text style={styles.billingText}>Bill Details</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Total</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Delivery Charge</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Coupon</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Tax</Text>
        </View>
        <View style={styles.billingStyling}>
          <Text styles={styles.billingTextStyling}>Sub Total</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cart;
