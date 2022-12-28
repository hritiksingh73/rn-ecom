import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import image from '../../../config/Image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import strings from '../../../constant/strings';
import GroceryProduct from '../../../data/GroceryProduct';
import {addToCart} from '../../../redux/action/Action.js';
import {useDispatch, useSelector} from 'react-redux';

const ProductDetailsScreen = ({navigation, route}) => {
  const {goBack} = useNavigation();
  const [dataItem, setDataItem] = useState();
  const {productData} = useSelector(state => state.cartData);

  const getProduct = route.params;
  const dispatch = useDispatch();

  const getClickItem = async () => {
    try {
      const response = await fetch(
        `https://grocery-backend-in.vercel.app/products/${getProduct}`,
      );
      const data = await response.json();
      console.log(data);
      setDataItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClickItem();
  }, []);

  const itemDetail = ({item}) => {
    return (
      <View style={styles.mainImageStyle}>
        <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.price}>${item.price} each</Text>
        <Text style={styles.price}>${item.oldPrice}</Text>
        <Text style={styles.descriptionStyle}>
          Loreum Ipsum is simply dummy text of the printing and typesetting
          industry',
        </Text>
      </View>
    );
  };

  const PopularProducts = ({item}) => {
    return (
      <View style={styles.data}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AntDesign
          name="left"
          size={30}
          onPress={() => goBack()}
          style={styles.leftIconStyle}
        />
        <FlatList
          data={dataItem}
          keyExtractor={item => item.id}
          renderItem={item => itemDetail(item)}
        />
        <View style={styles.imageBlock}>
          <View>
            <Image source={image.banana} />
          </View>
          <View style={styles.imageBox}>
            <View style={styles.imageBoxSize}>
              <Image source={image.banana} style={styles.imageSize} />
            </View>
            <View style={styles.imageBoxSize}>
              <Image source={image.banana} style={styles.imageSize} />
            </View>
            <View style={styles.imageBoxSize}>
              <Image source={image.banana} style={styles.imageSize} />
            </View>
          </View>
          <Text style={styles.textStyle}>Banana</Text>
          <Text style={styles.priceStyle}>$0.27 each</Text>
        </View>
        <View style={styles.headingText}>
          <Text style={styles.dataText}>{strings.heading1}</Text>
          <Text style={styles.dataText}>{strings.heading2}</Text>
          <Text style={styles.dataText}>{strings.heading3}</Text>
        </View>
        <View style={styles.relatedStyle}>
          <Text style={styles.headingStyle}>Related Items</Text>
        </View>
        <FlatList
          data={productData}
          //data={GroceryProduct}
          renderItem={PopularProducts}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={[styles.bottomBtn, {backgroundColor: 'black'}]}>
            <Text style={styles.btnText}>Add to Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomBtn, {backgroundColor: 'green'}]}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
