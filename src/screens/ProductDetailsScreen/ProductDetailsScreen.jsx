import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Rating} from 'react-native-ratings';
import ImagePath from '../../config/Image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import strings from '../../constant/String/strings';
import styles from './styles';
import {addItemToCart} from '../../redux/action/Action';

const ProductDetailsScreen = () => {
  const {productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  dispatch = useDispatch();

  const ListData = ({item}) => {
    return (
      <View style={styles.relatedItemContainer}>
        <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.relatedItemprice}>${item.price} each</Text>
          <Rating
            ratingCount={item.rating.rate}
            style={styles.rating}
            imageSize={15}
            readonly="true"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(addItemToCart(item));
            }}>
            <Text style={styles.addtocart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <AntDesign name="left" size={30} onPress={() => navigation.goBack()} />
        <View style={styles.headerBlock}>
          <Image source={ImagePath.iPhone} style={styles.cardImage} />
          <Text style={styles.itemName}>i-Phone</Text>
          <Text style={styles.price}>$ 699 each</Text>
        </View>

        <View style={styles.itemDescriptionContainer}>
          <Text style={styles.itemDescription}>{strings.paragraph1}</Text>
          <Text style={styles.itemDescription}>{strings.paragraph2}</Text>
          <Text style={styles.itemDescription}>{strings.paragraph3}</Text>
        </View>

        <Text style={styles.footerheading}>Related Items</Text>

        <FlatList
          data={productData}
          keyExtractor={item => item.id}
          renderItem={item => ListData(item)}
          horizontal={true}
        />
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.footerButtonLeft}>
            <Text style={styles.btnText}>Add to Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButtonRight}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
