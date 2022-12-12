import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {addtoCart} from '../../../redux/action/action';
import firestore from '@react-native-firebase/firestore';
import {styles} from './styles';

const data = [
  {
    id: 1,
    name: 'mango',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/mango.jpeg'),
    quantity: 0,
  },

  {
    id: 2,
    name: 'pineapple',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/pineapple.jpeg'),
    quantity: 0,
  },

  {
    id: 3,
    name: 'grapes',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/grapes.png'),
    quantity: 0,
  },

  {
    id: 4,
    name: 'banana',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/banana.webp'),
    quantity: 0,
  },

  {
    id: 5,
    name: 'Broccoli',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/Broccoli.jpeg'),
    quantity: 0,
  },

  {
    id: 6,
    name: 'cabbage',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/cabbage.jpeg'),
    quantity: 0,
  },
  {
    id: 7,
    name: 'Tomato',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/Tomato.webp'),
    quantity: 0,
  },
  {
    id: 8,
    name: 'radish',
    Price: 100,
    oldPrice: 200,
    image: require('../../../assests/radish.jpeg'),
    quantity: 0,
  },
];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const deliverData = item => {
    navigation.navigate('Cart');

    dispatch(addtoCart(item));
    //console.log(item.id);
    firestore()
      .collection('Cart')
      .add({
        name: item.name,
        id: item.id,
        price: item.Price,
        oldPrice: item.oldPrice,
      })
      .then(() => {
        console.log('User added!');
      });
    navigation.navigate('Cart');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.constainer}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Feather
              name={'align-justify'}
              size={30}
              style={styles.headerIcon}
            />
            <Ionicons
              name={'notifications-outline'}
              size={30}
              style={styles.headerIconTwo}
            />
            <Text style={styles.headerTxt}>Super Fresh</Text>
          </View>

          <View style={styles.superFresh}>
            <View style={styles.flexStyl}>
              <Image
                style={styles.imgStyle}
                source={require('../../../assests/Lettuce.jpeg')}
              />
              <Text style={styles.headertitle}>Super Fresh</Text>
              <Feather name={'chevron-down'} size={20} />
              <Feather name={'heart'} size={28} style={styles.heartIcon} />
            </View>
          </View>
          <View>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <View style={styles.horizontalSlidebar}>
                    <Image style={styles.bgimage} source={item.image} />
                  </View>
                );
              }}
            />
          </View>
          <View>
            <Text style={styles.PopTxt}>Poppular Products</Text>
          </View>

          <View>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemContainer}>
                    <View style={styles.innerSection}>
                      <View style={styles.block1}>
                        <Image style={styles.bgimage} source={item.image} />
                      </View>
                      <View style={styles.block1}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>
                          Rs. {item.price} {item.oldPrice}
                        </Text>

                        <TouchableOpacity
                          style={styles.touchableArea}
                          onPress={() => deliverData(item)}>
                          <Text style={styles.AtoCBtn}>Add to Cart</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View>
            <Text style={styles.PopTxt}>Trending near you</Text>
          </View>

          <View>
            <FlatList
              data={data}
              numColumns={'2'}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemContainer}>
                    <View style={styles.innerSection}>
                      <View style={styles.block1}>
                        <Image style={styles.bgimage} source={item.image} />
                      </View>
                      <View style={styles.block1}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>
                          Rs. {item.price} {item.oldPrice}
                        </Text>

                        <TouchableOpacity
                          style={styles.touchableArea}
                          onPress={() => {
                            deliverData(item);
                          }}>
                          <Text style={styles.AtoCBtn}>Add to Cart</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HomeScreen;
