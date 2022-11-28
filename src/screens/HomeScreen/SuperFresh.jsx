import {
  ActivityIndicator,
  Button,
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

const SuperFresh = () => {
  const Dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();

  useEffect(() => {
    Dispatch(getInitialData());
  }, []);

  const selecteditems = useSelector(state => state.userInfo.cart);
  const userData = useSelector(state => state.userInfo.loginpage);

  // const productList = {
  //   ...productData,
  //   qnty: 1,
  // };
  // console.log(productData)

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.imgStyle} />
        <Text style={styles.mainContainer}>{item.title}</Text>
        <Text style={styles.mainContainer}>{item.rating.rate}</Text>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => {
            Dispatch(addItemToCart(item));
            // console.log(item);
            firestore()
              .collection(userData.name)
              .doc(userData.email)
              .set({
                uid: userData.uid,
                selecteditems,
              })
              .then(() => {
                console.log('item added to firestore added!!');
              });

            // firestore()
            //   .collection(userData.name)
            //   .add({
            //     name: userData.name,
            //     item: item,
            //   })
            //   .then(() => {
            //     console.log('item added to firestore added!');
            //   });
          }}>
          <Text style={styles.addtocart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const bannerImages = ({item}) => {
    return (
      <View style={styles.selectionCard}>
        <ImageBackground
          style={styles.cardImage}
          source={item.image}
          resizeMode="cover"
        />
        <Text style={styles.imageTitle}>Superfresh</Text>
        <Text style={styles.imagedescription}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView>
        <ActivityIndicator animating={isFetching} />
        <View style={styles.headerBar}>
          <Tree name="ios-menu-outline" size={30} />
          <Text style={styles.headertitle}>Super Fresh</Text>
          <Bell name="bell-badge-outline" size={30} />
        </View>

        <View style={styles.ratingcontainerchild}>
          <Image
            source={require('../../asset/grocerry.jpeg')}
            style={styles.tinyIcon}
          />
          <View style={styles.ratingcontainer}>
            <Text style={styles.secondheader}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
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
