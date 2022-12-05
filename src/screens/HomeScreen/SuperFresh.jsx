import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Tree from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {getInitialData} from '../../redux/thunk/ProductThunk';
import {addItemToCart} from '../../redux/action/Action';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import Banner from './Banner';
import {Color} from '../../constant/Color';
import remoteConfig from '@react-native-firebase/remote-config';

const SuperFresh = () => {
  const Dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);

  const cartItem =( item )=> {
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

  useEffect(() => {
    Dispatch(getInitialData());
  }, []);

  const ListData = ({item}) => {
    return (
        <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.price}>${item.price} each</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              Dispatch(addItemToCart(item)), cartItem(item);
            }}>
            <Text style={styles.addtocart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
    );
  };

  const bannerImages = ({item}) => {
    return (
      <View style={styles.selectionCard}>
        <ImageBackground style={styles.cardImage} source={item.image} />
        <Text style={styles.imageTitle}>Super Fresh</Text>
        <Text style={styles.imagedescription}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      {/* <Button title="Press" onPress={config} /> */}
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
            style={styles.tinyIcon}
          />
          <View style={styles.ratingcontainer}>
            <Text style={styles.secondheader}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} /*ratingColor="red"*/  />
          </View>
        </View>

        <FlatList
          data={Banner}
          renderItem={item => bannerImages(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        {/* <Button title='press' onPress={()=>{productList}}/> */}
        <View style={styles.popularproductcontainer}>
          <Text style={styles.poppularproducts}>Poppular Product </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PopularProduct')}>
            <Text style={styles.viewMore}>View More </Text>
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
export default SuperFresh;
