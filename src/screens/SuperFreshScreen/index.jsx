import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {GROCERIES} from '../../data/groceryICarousel';
import {GROCERYPRODUCTS} from '../../data/groceryProducts';
import {styles} from './styles';
import ListItem from '../../components/ListItem';

const renderSuperFreshItem = grocery => {
  return (
    <View style={styles.renderItem}>
      <Image
        source={{uri: grocery.item.imageUrl}}
        style={styles.carouselImgStyle}
      />
    </View>
  );
};
const renderGroceryProducts = products => {
  return (
    <View>
      <Image
        source={{uri: products.item.imageUrl}}
        style={styles.groceryImgStyle}
      />
      <Text>{products.item.title}</Text>
      <Text style={styles.priceTxt}>{products.item.price}</Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
const SuperFreshScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcon name="menu" size={30} />
        <Text style={styles.headerText}>Super Fresh</Text>
        <MaterialIcon name="bell-badge-outline" size={30} />
      </View>
      <ListItem
        data={GROCERIES}
        renderItem={renderSuperFreshItem}
        horizontal={true}
      />
      <Text style={styles.productsTxt}>Popular Products</Text>
      <ListItem
        data={GROCERYPRODUCTS}
        renderItem={renderGroceryProducts}
        horizontal
      />
      <TouchableOpacity
        style={[styles.btnContainer, styles.viewBtn]}
        onPress={() => navigation.navigate('Popular Products')}>
        <Text style={styles.btnTxt}>View More 👉 </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SuperFreshScreen;
