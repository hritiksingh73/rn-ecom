import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {addtoCart} from '../../redux/action/action';

const data = [
  {
    id: 1,
    name: 'mango',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/mango.jpeg'),
    quantity: 0,
  },

  {
    id: 2,
    name: 'pineapple',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/pineapple.jpeg'),
    quantity: 0,
  },

  {
    id: 3,
    name: 'grapes',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/grapes.png'),
    quantity: 0,
  },

  {
    id: 4,
    name: 'banana',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/banana.webp'),
    quantity: 0,
  },

  {
    id: 5,
    name: 'Broccoli',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/Broccoli.jpeg'),
    quantity: 0,
  },

  {
    id: 6,
    name: 'cabbage',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/cabbage.jpeg'),
    quantity: 0,
  },
  {
    id: 7,
    name: 'Tomato',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/Tomato.webp'),
    quantity: 0,
  },
  {
    id: 8,
    name: 'radish',
    Price: 100,
    oldPrice: 200,
    image: require('../../assests/radish.jpeg'),
    quantity: 0,
  },
];

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const deliverData = item => {
    navigation.navigate('Cart');

    dispatch(addtoCart(item));
    //console.log(item.id);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.constainer}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Super Fresh</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={[styles.flexStyl, {alignItems: 'center'}]}>
              <Image
                style={styles.imgStyle}
                source={require('../../assests/Lettuce.jpeg')}
              />
              <Text style={styles.headertitle}>Super Fresh</Text>
              <Feather name={'chevron-down'} size={20} />
            </View>

            {/* <View>
          <Feather name={'heart'} size={20} />
        </View> */}
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
                  <View
                    style={[styles.itemContainer, {flexDirection: 'column'}]}>
                    <View
                      style={{width: '100%', height: '100%', borderWidth: 0.5}}>
                      <View style={styles.block1}>
                        <Image style={styles.bgimage} source={item.image} />
                      </View>
                      <View style={styles.block1}>
                        <Text style={{marginHorizontal: 10}}>{item.name}</Text>
                        <Text style={{marginHorizontal: 10}}>
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
                  <View
                    style={[styles.itemContainer, {flexDirection: 'column'}]}>
                    <View
                      style={{width: '100%', height: '100%', borderWidth: 0.5}}>
                      <View style={styles.block1}>
                        <Image style={styles.bgimage} source={item.image} />
                      </View>
                      <View style={styles.block1}>
                        <Text style={{marginHorizontal: 10}}>{item.name}</Text>
                        <Text style={{marginHorizontal: 10}}>
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

const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
    marginBottom: 30,
  },
  flexStyl: {
    flexDirection: 'row',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  headertitle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  bgimage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  horizontalSlidebar: {
    width: 350,
    height: 200,
    marginVertical: 10,
    marginRight: 10,
    marginTop: 25,
  },
  PopTxt: {
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 10,
  },
  itemContainer: {
    width: 200,
    height: 300,
    marginVertical: 10,
    marginRight: 0,
    marginTop: 25,
  },
  block1: {
    width: 200,
    height: '60%',
  },
  block2: {
    width: 200,
    height: '40',
  },
  AtoCBtn: {
    textAlign: 'center',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  touchableArea: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default Home;
