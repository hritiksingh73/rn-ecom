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
import Data from '../../homeData/Data.js';
import {addToCart} from '../../redux/action/Action.js';
import List from '../../homeData/List.js';
import styles from './styles.js';
import firestore from '@react-native-firebase/firestore';

const SuperFreshScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userRecord = useSelector(state => state.userData.cartProduct);
  const usersCollection = firestore().collection('Users');
  const userDocument = firestore().collection('Users').doc('ABC');

  const addList = item => {
    dispatch(addToCart(item));
  };

  const onResult = QuerySnapshot => {
    console.log('Got Users collection result.');
  };

  const onError = error => {
    console.error(error);
  };

  firestore().collection('Users').onSnapshot(onResult, onError);

  const User = ({userId}) => {
    useEffect(() => {
      const subscriber = firestore()
        .collection('Users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });

      // Stop listening for updates when no longer required
      return () => subscriber();
    }, [userId]);
  };

  const Firestore = item => {
  //   firestore()
  //     .collection('Nishi')
  //     .add({
  //       title: item.title,
  //       id: item.id,
  //       quantity: item.quantity,
  //       price: item.price,
  //       oldPrice: item.oldPrice
  //     })
  //     .then(() => {
  //       console.log('User added!');
  //     });
  // };

  firestore()
  .collection('Users')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
}

  const VeggiesItem = ({item}) => {
    return (
      <View style={styles.item}>
        <ImageBackground style={styles.flatlist} source={item.image} />
        <Text style={styles.fresh}>Superfresh</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const PopularProducts = ({item}) => {
    return (
      <View style={styles.data}>
        <Image
          source={item.image}
          style={styles.flatlistData}
          resizeMode="center"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dollar}>{item.price}</Text>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addList(item);
            console.log(item.id);
          }}> */}
        <TouchableOpacity onPress={() => Firestore(item) }>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Icon name="bars" size={20} />
        <Text style={styles.text}>Super Fresh</Text>
        <Icon name="bells" size={20} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View style={styles.vegetableImage}>
          <Image
            source={require('../../assets/image3.jpeg')}
            style={styles.freshImage}
          />
          <View>
            <Text style={styles.superFresh}>Super Fresh</Text>
            <Rating imageSize={15} ratingCount={5} />
          </View>
          <View style={styles.heart}>
            <Icon name="hearto" size={24} />
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        data={List}
        renderItem={VeggiesItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
      <Text style={styles.popular}>Popular Products</Text>
      <FlatList
        data={Data}
        renderItem={PopularProducts}
        horizontal={true}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Popular Products')}>
        <Text>More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuperFreshScreen;
