import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    id: 1,
    name: 'mango',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },

  {
    id: 2,
    name: 'pineapple',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },

  {
    id: 3,
    name: 'grapes',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },

  {
    id: 4,
    name: 'banana',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },

  {
    id: 5,
    name: 'Broccoli',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },

  {
    id: 6,
    name: 'cabbage',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },
  {
    id: 7,
    name: 'Tomato',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },
  {
    id: 8,
    name: 'radish',
    price: 100,
    oldPrice: 200,
    image: require('../../../assets/images/fruits/Apple/Apple_img1.jpg'),
  },
];

const FilterScreen = () => {
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
                source={require('../../../assets/images/fruits/Apple/Apple_img1.jpg')}
                />
              <Text style={styles.headertitle}>Super Fresh</Text>
              <Feather name={'home'} size={20} />
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
                return(
                  <View style={styles.horizontalSlidebar}>
                    <Image
                      style={styles.bgimage}
                      source={item.image}
                      />
                  </View>
                )
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
                return(
                  <View style={[styles.itemContainer, {flexDirection: 'column'}]}>

                    <View style={{width: '100%', height: '100%',borderWidth: 0.5}}>
                          <View style={styles.block1}>
                            <Image
                              style={styles.bgimage}
                              source={item.image}
                              />
                          </View>
                          <View style={styles.block1}>

                            <Text style={{marginHorizontal:10,}}>{item.name}</Text>
                            <Text style={{marginHorizontal:10,}}>Rs. {item.price} {item.oldPrice}</Text>

                            <TouchableOpacity style={styles.touchableArea}>
                              <Text style={styles.AtoCBtn}>
                                Add to Cart
                              </Text>
                            </TouchableOpacity>

                          </View>
                      
                    </View>
                    
                  </View>
                )
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
                return(
                  <View style={[styles.itemContainer, {flexDirection: 'column'}]}>

                    <View style={{width: '100%', height: '100%',borderWidth: 0.5}}>
                          <View style={styles.block1}>
                            <Image
                              style={styles.bgimage}
                              source={item.image}
                              />
                          </View>
                          <View style={styles.block1}>

                            <Text style={{marginHorizontal:10,}}>{item.name}</Text>
                            <Text style={{marginHorizontal:10,}}>Rs. {item.price} {item.oldPrice}</Text>

                            <TouchableOpacity style={styles.touchableArea}>
                              <Text style={styles.AtoCBtn}>
                                Add to Cart
                              </Text>
                            </TouchableOpacity>

                          </View>
                      
                    </View>
                    
                  </View>
                )
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
      alignItems: 'center'
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
      borderColor: 'lightgray'
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
      marginVertical: 10
    }
})

export default FilterScreen;
