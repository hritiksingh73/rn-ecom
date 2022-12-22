import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import veggiImages from '../../../data/homeScreenData';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';
import globaStyle from '../../../constants/globalStyle';
import styles from './styles';
import strings from '../../../constants/strings';
import images from '../../../config/images';
import colors from '../../../constants/colors';
import Fruits from '../../../data/localFruitsapi/FruitsApi';
import Vegitables from '../../../data/localVegetablesapi/VegetablesApi';
import Pulses from '../../../data/localPulsesapi/PulsesApi';
import ItemList from '../../../components/ItemList';
import TrendingItems from '../../../components/TrendingItems';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState({});
  const width = Dimensions.get('window').width;

  const CallingApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonResponse = await response.json();
    setData(jsonResponse);
  };
  useEffect(() => {
    CallingApi();
  }, []);

  return (
    <SafeAreaView style={globaStyle.outerContainer}>
      <ScrollView>
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

        <View style={styles.carousalContainer}>
          <Carousel
            loop
            width={width}
            height={width / 2 + 10}
            autoPlay={true}
            data={veggiImages}
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
                    <Text style={styles.txtOnImageContent}>{strings.txt1}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
          <Text style={styles.productHeading}>Poppular Product</Text>
        </TouchableOpacity>
        <TrendingItems data={Fruits} />
        <TouchableOpacity onPress={() => navigation.navigate('Vegetables')}>
          <Text style={styles.productHeading}>Trending near you</Text>
        </TouchableOpacity>
        <TrendingItems data={Vegitables} />
        <TouchableOpacity onPress={() => navigation.navigate('Pulses')}>
          <View style={styles.bottomItemStyl}>
            <Text style={styles.productHeading}>Other</Text>
            <ItemList data={Pulses} />
          </View>
        </TouchableOpacity>

        {/* Api Data
        <FlatList
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
