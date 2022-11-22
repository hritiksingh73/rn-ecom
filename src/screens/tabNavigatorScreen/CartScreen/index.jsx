import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NumberOfItems} from '../../../redux/action/action';
import Entype from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

const CartScreen = () => {
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();
  const data = useSelector(state => state.user.fruitCart);
  const numberOfItems = useSelector(state => state.user.numberOfItems);

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.horizontlmrgn}>
        <View>
          <Text style={styles.title}>Cart</Text>
        </View>

        <View>
          <View style={styles.itemHeader}>
            <Image
              style={styles.imgStyl}
              source={require('../../../assets/images/MFruits1.jpg')}
            />
            <Text style={styles.headerTxt}>Fresh Fruits</Text>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.cartItemContainer}>
                      <View style={styles.imgCntnr}>
                        <Image
                          style={styles.itemImg}
                          resizeMode="contain"
                          source={item.url}
                        />
                      </View>

                      <View style={styles.itemTitleArea}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemMrp}>₹{item.price}</Text>
                      </View>

                      <View style={styles.countingCntnr}>
                        <View style={styles.counterBorder}>
                          <TouchableOpacity
                            onPress={() => {
                              if (number > 0) {
                                setNumber(number - 1);
                              }
                            }}>
                            <Text style={styles.dec}>- </Text>
                          </TouchableOpacity>
                        </View>

                        <Text style={styles.num}>{number}</Text>
                        {/* <Text style={styles.num}>{item.numberOfItem}</Text> */}
                        <View style={styles.incrementBtnStyle}>
                          <TouchableOpacity
                            onPress={() => {
                              setNumber(number + 1);
                                // dispatch(NumberOfItems(number, index, item.id))
                              // console.log(item, 'indexis',index, number)
                            }}>
                            <Text style={styles.inc}>+ </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.borderBotm} />
                  </View>
                );
              }}
            />
            <View style={styles.couponBlock}>
              <View style={styles.couponInnerBlock}>
                <View style={styles.flxdir}>
                  <Feather
                    name={'credit-card'}
                    size={20}
                    style={styles.couponIconStyl}
                  />
                  <TextInput
                    style={styles.couponTxt}
                    placeholder="Coupon Code"
                    placeholderTextColor={'black'}
                  />
                </View>
                <TouchableOpacity>
                  <Text style={styles.applyBtn}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={styles.itemHeader}>
            <Image  
                style={styles.imgStyl}
                source={require('../../../assets/images/MVegetables1.jpg')}
            />
            <Text style={styles.headerTxt}>Fresh Vegetables</Text>
        </View>
        <View style={styles.itemHeader}>
            <Image  
                style={styles.imgStyl}
                source={require('../../../assets/images/MPulses1.webp')}
            />
            <Text style={styles.headerTxt}>Fresh Pulses</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
