import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {GROCERIES} from '../../data/groceryICarousel';
import {styles} from './styles';
import CarouselComponent from '../../components/CarouselComponent';
import RelatedProducts from '../../components/RelatedProducts';
import ProductItem from '../../components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from '../../components/ListItem';
import {addCartProduct} from '../../redux/actions/userAction';
import {globalStyle} from '../../constant/globalStyle';

const renderSuperFreshItem = ({item}) => {
  return (
    <View style={styles.renderItem}>
      <Image source={{uri: item.imageUrl}} style={styles.carouselImgStyle} />
    </View>
  );
};
const SuperFreshScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={globalStyle.header}>
          <MaterialIcon name="menu" size={30} />
          <Text style={globalStyle.headerText}>Super Fresh</Text>
          <MaterialIcon
            name="bell-badge-outline"
            size={30}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>

        <CarouselComponent data={GROCERIES} renderItem={renderSuperFreshItem} />

        <Text style={styles.productsTxt}>
          Popular Products
          <MaterialIcon
            name="arrow-right"
            size={25}
            onPress={() => navigation.navigate('Popular Products')}
          />
        </Text>
        <RelatedProducts style={{flex: 1}} />
        <Text style={styles.productsTxt}>Trending near you</Text>
        <ListItem
          data={products}
          renderItem={({item}) => {
            return (
              <ProductItem
                item={item}
                onAddToCart={() => dispatch(addCartProduct(item))}
              />
            );
          }}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default SuperFreshScreen;
