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
import veggiImages from '../../../data/homeScreenData';
import Feather from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';
import colors from '../../../constants/colors';
import images from '../../../config/images';

const HomeScreen = ({navigation}) => {
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
      <ScrollView style={styles.containerMargin}>
        
        <View style={styles.headerBar}>
          <View></View>
          <View style={styles.imgBox}>
            <Image style={styles.imgStyl} source={images.source1} />
            <View>
              <View style={styles.headerTitleBlock}>
                <Text style={styles.headerTitleTxt}>Super Fresh</Text>
              </View>
              <View style={styles.headerRatingBlock}>
                <Rating imageSize={15} ratingCount={5} jumpValue={1} />
              </View>
            </View>
            <View style={styles.bottomArrowIcon}>
              <Feather
                name={'chevron-down'}
                size={20}
                color={colors.lightgray}
              />
            </View>
          </View>
          <View style={styles.heartIcon}>
            <TouchableOpacity>
              <Feather name={'heart'} size={22} color={colors.lightgray} />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={veggiImages}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.horizontalSlidebar}>
                <Image
                  style={styles.itemImage}
                  resizeMode="cover"
                  source={item.path}
                />
                <View style={styles.txtOnImageContainer}>
                  <Text style={styles.txtOnImageHeader}>Super Fresh</Text>
                  <Text style={styles.txtOnImageContent}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <Text style={styles.productHeading}>Poppular Product</Text>
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
        {/* <ItemList data={PoppularProductsData}/> */}

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

export default HomeScreen;