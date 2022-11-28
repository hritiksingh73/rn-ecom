import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Data from '../../homeData/Data.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/action/Action.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';

const PopularProductScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const userRecord = useSelector(state => state.userData.cartProduct);

  const addList = item => {
    dispatch(addToCart(item));
  };

  const FlatListData = ({item}) => {
    return (
      <View style={styles.data}>
        <Image
          source={item.image}
          style={styles.flatlistData}
          resizeMode="center"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dollar}>{item.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addList(item);
            console.log(item.id);
          }}>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.product}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.text}>Poppular Products</Text>
        <Icon name="bell-badge-outline" size={30} />
      </View>
      <View style={styles.main}>
        <View style={styles.sort}>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.topHeader}
              onPress={() => navigation.navigate('Sort')}>
              <MaterialCommunityIcons name={'sort-descending'} size={25} />
              <Text style={styles.sortItem}>Sort</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filter}>
            <AntDesign name="filter" size={20} style={styles.size} />
            <Text style={styles.filterItem}>Filter</Text>
          </View>
        </View>
      </View>
      <FlatList data={Data} numColumns={2} renderItem={FlatListData} />
    </SafeAreaView>
  );
};

export default PopularProductScreen;
