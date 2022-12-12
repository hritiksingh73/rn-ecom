import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import homeScreenData from '../../../data/homeScreenData';

const SearchScreen = ({navigation}) => {
  const [data, setData] = useState({});

  const CallingApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonResponse = await response.json();
    setData(jsonResponse);
  };
  useEffect(() => {
    CallingApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Super Fresh</Text>
        <FlatList
          data={veggiImages}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={styles.horizontalSlidebar}>
                <Image
                  style={styles.itemImage}
                  resizeMode="cover"
                  showsHorizontalScrollIndicator={true}
                  source={item.path}
                />
              </View>
            );
          }}
        />
        <Text style={styles.productHeading}>
          Poppular Product
        </Text>
        {/* <FlatList
          data={data}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={styles.productList}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.itemImage}
                    resizeMode="contain"
                    showsHorizontalScrollIndicator={true}
                    source={{uri: item.image}}
                  />
                </View>
                <View style={styles.txtContainer}>
                  <Text style={styles.itemTitle}>{item.category}</Text>
                  <Text style={styles.itemTitle}>Price: {item.price}$</Text>
                  <Text style={styles.itemTitle}>
                    Rating: {item.rating.rate}
                  </Text>
                  <TouchableOpacity style={styles.addToCartContainer}>
                    <Text style={styles.addToCartBtn}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        /> */}
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('Fruits')}>
          <Text style={styles.categoryTxt}>Fruits Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.category}
          onPress={() => navigation.navigate('Vegetables')}>
          <Text style={styles.categoryTxt}>Vegetables Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.category}
          onPress={() => navigation.navigate('Pulses')}>
          <Text style={styles.categoryTxt}>Pulses Screen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
