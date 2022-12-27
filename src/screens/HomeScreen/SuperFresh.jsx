import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Tree from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {addItemToCart} from '../../redux/action/Action';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {Banner} from '../../dummyData/Cards';
import {Color} from '../../constant/Color';
import Carousel from 'react-native-reanimated-carousel';

const SuperFreshScreen = () => {
  const dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);
  const width = Dimensions.get('window').width;

  const cartItem = item => {
    firestore()
      .collection('Cart')
      .doc(userData.uid)
      .set({
        selecteditems,
      })
      .then(() => {
        console.log('item added to firestore!!');
      });
  };

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.priceBracket}>
          <Text style={styles.price}>${item.price}each</Text>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            dispatch(addItemToCart(item)), cartItem(item);
          }}>
          <Text style={styles.addtocart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const bannerImages = ({item}) => {
    return (
      <View style={styles.carousal}>
        <ImageBackground style={styles.cardImage} source={item.image} />
        <Text style={styles.imageTitle}>Super Fresh</Text>
        <Text style={styles.imagedescription}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ActivityIndicator animating={isFetching} />
        <View style={styles.headerBar}>
          <Tree name="ios-menu-outline" size={25} color={Color.black} />
          <Text style={styles.headertitle}>Super Fresh</Text>
          <Bell name="bell-badge-outline" size={25} color={Color.black} />
        </View>

        <View style={styles.ratingcontainerchild}>
          <Image
            source={require('../../asset/grocerry.jpeg')}
            style={styles.headerIcon}
          />
          <View style={styles.ratingcontainer}>
            <Text style={styles.secondheader}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WishListScreen')}>
            <Icon
              name="hearto"
              size={25}
              color={Color.black}
              style={styles.wishlist}
            />
          </TouchableOpacity>
        </View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={Banner}
          scrollAnimationDuration={1000}
          renderItem={item => bannerImages(item)}
        />
        <View style={styles.popularProductContainer}>
          <Text style={styles.popularProducts}>Popular Product </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PopularProduct')}>
            <Icon name="right" size={25} style={styles.viewMore} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={productData}
          renderItem={item => ListData(item)}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default SuperFreshScreen;
