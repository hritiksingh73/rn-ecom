import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {removeItemFromCart, addItemToCart} from '../../redux/action/Action';
import {Rating} from 'react-native-ratings';

const WishListScreen = () => {
  const item = useSelector(state => state.userInfo.cart);
  const navigation = useNavigation();
  dispatch = useDispatch();

  const ClearCartItem = item => {
    dispatch(removeItemFromCart(item));
  };

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.imgStyle} />
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price} each</Text>
        <Rating
          ratingCount={item.rating.rate}
          style={styles.rating}
          imageSize={15}
          readonly="true"
        />
        <View style={styles.itemButtons}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(addItemToCart(item));
            }}>
            <Text style={styles.addtocart}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(ClearCartItem(item.id));
            }}>
            <Icon name="delete" size={35} style={styles.bin} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView>
        <View style={styles.mainHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow name="left" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.wishList}>WishList</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={item}
        renderItem={item => ListData(item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};
export default WishListScreen;
