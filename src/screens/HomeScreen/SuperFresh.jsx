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
import {SafeAreaView} from 'react-native-safe-area-context';
import Tree from 'react-native-vector-icons/Ionicons';
import Hearto from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../../redux/thunk/ProductThunk';
import {addItemToCart} from '../../redux/action/Action';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Banner from './Banner';
import { ScrollView } from 'react-native-virtualized-view';


const SuperFresh = () => {
  const Dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();

  useEffect(() => {
    Dispatch(getInitialData());
  }, []);

  const addItem = item => {
    Dispatch(addItemToCart(item));
  };

  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.mainContainer}>{item.title}</Text>
          <Rating imageSize={15} ratingCount={5} />
          <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => {
            addItem(item);
            console.log(item.id);
          }}>
          <Text style={{color: 'black'}}>Add to Cart</Text>
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
    <ScrollView nestedScrollEnabled={true} >
      <SafeAreaView>
        <ActivityIndicator animating={isFetching} />
        <View style={styles.headerBar}>
          <Tree name="ios-menu-outline" size={30} />
          <Text style={{fontSize: 25}}>Super Fresh</Text>
          <Bell name="bell-badge-outline" size={30} />
        </View>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            source={require('../../asset/bag.png')}
            style={{width: 24, height: 24}}
          />
          <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '800'}}>
            {' '}
            {items.length}{'01'}
          </Text>
        </TouchableOpacity>
        <View style={styles.ratingcontainerchild}>
          <Image
            source={require('../../asset/grocerry.jpeg')}
            style={styles.tinyIcon}
          />
          <View style={styles.ratingcontainer}>
            <Text style={{fontSize: 18}}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
          </View>
          <View style={{marginLeft:"10%"}}>
             <Hearto name="hearto" size={24} style={styles.favourite} />
          </View>
         
        </View>

        <FlatList
          data={Banner}
          renderItem={item => bannerImages(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, paddingLeft: 20}}>Poppular Product </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('PopularProduct')} >
            <Text style={{fontSize: 20, paddingLeft: 20, paddingLeft: '25%'}}>
              View More{' '}
            </Text>
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
