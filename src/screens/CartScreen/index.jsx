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
import {useDispatch, useSelector} from 'react-redux';
import {removeToCart} from '../../redux/action/Action.js';
import styles from './styles.js'

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.userData.cartProducts);

  const removeList = item => {
    dispatch(removeToCart(item));
    console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.cart}>Cart</Text>
      <View style={{flex: 1}}>
        <View style={styles.vegetableImage}>
          <Image
            source={require('../../assets/image3.jpeg')}
            style={styles.freshImage}
          />
          <View style={styles.superImage}>
            <Text style={{fontSize: 18, margnLeft: 50, margin: 10}}>
              Super Fresh
            </Text>
          </View>
          <FlatList
            data={item}
            renderItem={({item, index}) => {
              return (
                <View style={styles.mainList}>
                  <Image
                    source={item.image}
                    style={styles.fruitImage}
                    resizeMode="center"
                  />
                  <View>
                    <Text>{item.title}</Text>
                    <Text>{item.dollar}</Text>
                    <TouchableOpacity
                      style={styles.remove}
                      onPress={() => {
                        removeList(item.id);
                        console.log(item.id);
                      }}>
                      <Text style={styles.delete}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity
            style={styles.add}>
          <Icon name="minus" size={20} />
          </TouchableOpacity>
          <Text style={styles.number}>1</Text>

          <TouchableOpacity style={styles.add}>
            <Icon name="plus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Cart;
