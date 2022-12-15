import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../SuperFreshScreen/styles';
import ListItem from '../../components/ListItem';
import {addCartProduct} from '../../redux/actions/userAction';
import {removeFromWishlist} from '../../redux/actions/userAction';
import CategoryGridItem from '../../components/CategoryGridItem';
import {color} from '../../constant/color';
import PopupMsg from '../../components/PopupMsg';

const WishlistScreen = props => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const wishlistProduct = useSelector(
    state => state.cartProductReducer.wishList,
  );
  const [isModalVisible, setisModalVisible] = useState(false);

  const yesBtnHandler = item => {
    dispatch(removeFromWishlist(item.id));
    setisModalVisible(false);
  };

  const ProductItem = item => {
    return (
      <View style={styles.productDetailContainer}>
        <CategoryGridItem imgSource={{uri: item.imageUrl}} />
        <View style={styles.itemDirection}>
          <Text>{item.title}</Text>
          <Icon
            name="heart"
            size={20}
            color={color.primary}
            style={{marginLeft: '60%'}}
            onPress={() => setisModalVisible(true)}
          />
        </View>
        <Text style={styles.priceTxt}>{item.price}</Text>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => dispatch(addCartProduct(item))}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Wishlist</Text>
        <AntDesign
          name="shoppingcart"
          size={30}
          onPress={() => props.navigation.navigate('Cart')}
        />
      </View>

      <ListItem
        data={wishlistProduct}
        renderItem={({item}) => ProductItem(item)}
        numColumns={2}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemDivider}></View>;
        }}
      />
      <PopupMsg
        visible={isModalVisible}
        yesBtn={yesBtnHandler}
        cancelBtn={() => setisModalVisible(false)}
      />
    </SafeAreaView>
  );
};
export default WishlistScreen;