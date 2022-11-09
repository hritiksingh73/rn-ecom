import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import Hearto from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../redux/thunk/ProductThunk';
import {addItemToCart} from '../redux/action/Action';
import {useNavigation} from '@react-navigation/native';

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

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => {
            addItem(item);
            console.log(item)
          }}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.mainContainer}>{item.title}</Text>
          <Text style={{color: 'black'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;
  return (
    <SafeAreaView>
      <ActivityIndicator animating={isFetching} />
      <View style={styles.headerBar}>
        <Icon name="menu" size={30} />
        <Text style={{fontSize: 25}}>Super Fresh</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#b3ffd9',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginRight: 20,
        }}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Image
          source={require('../asset/bag.png')}
          style={{width: 24, height: 24}}
        />
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '800'}}>
          {addedItems.length}
        </Text>
      </TouchableOpacity>
      <View style={styles.ratingcontainerchild}>
        <Image
          source={require('../asset/grocerry.jpeg')}
          style={styles.tinyIcon}
        />
        <View style={styles.ratingcontainer}>
          <Text style={{fontSize: 18}}>Super Fresh</Text>
          <Rating imageSize={15} ratingCount={5} />
        </View>
        <Hearto name="hearto" size={24} style={styles.favourite} />
      </View>

      <FlatList
        data={productData}
        renderItem={item => ListData(item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  imgContainer: {
    paddingHorizontal: 5,

    alignItems: 'center',
  },
  imgStyle: {
    width: '60%',
    height: 160,
  },
  card: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
  },
  mainContainer: {
    width: '100%',
    //padding:50,
    backgroundColor: '#b696d7',
    //display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingcontainerchild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favourite: {
    // alignContent: 'flex-end',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default SuperFresh;
