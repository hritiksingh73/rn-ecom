import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../../redux/thunk/productThunk.js';
import Data from '../../homeData/Data.js';
import Veggies from '../../homeData/Veggies.js';
import {addToCart} from '../../redux/action/Action.js'

const veggiesItem = ({item}) => {
    
  return (
    <View style={styles.item}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => {
            //addItem(item);
            console.log(item);
          }}>
      <Image source={item.image} style={styles.flatlist} />
      </TouchableOpacity>
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <View style={styles.data}>
      <Image source={item.image} style={styles.flatlistData} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dollar}>{item.dollar}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
const SuperFreshScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const userRecord = useSelector(state => state.userData.cartProduct);
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Icon name="bars" size={20} />
        <Text style={styles.text}>Super Fresh</Text>
        <Icon name="bells" size={20} />
      </View>
      <View style={styles.vegetableImage}>
        <Image
          source={require('../../assets/image3.jpeg')}
          style={styles.freshImage}
        />
        <View style={styles.superImage}>
          <Text style={{fontSize: 20, margin: 15}}>Super Fresh</Text>
          <Rating imageSize={15} ratingCount={5} />
        </View>
      </View>
      <FlatList
        data={Veggies}
        renderItem={veggiesItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
      <Text style={styles.popular}>Popular Products</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Popular Products')}>
        <Text>More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  vegetableImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  freshImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 20,
  },
  data: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    margin: 20,
  },
  popular: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 25,
    marginLeft: 20,
  },
  flatlist: {
    height: '40%',
    width: 200,
    margin: 5,
  },
  dollar: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10,
  },
  products: {
    fontSize: 20,
    margin: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    margin: 10,
  },

  superImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistData: {
    marginTop: 20,
    height: 180,
    width: 220,
    margin: 5,
  },
});

export default SuperFreshScreen;
