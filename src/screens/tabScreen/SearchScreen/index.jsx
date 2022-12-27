import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import GroceryProduct from '../../../data/GroceryProduct.js';
import styles from './styles.js';

const SearchScreen = ({navigation}) => {
  const PopularProducts = ({item}) => {
    return (
      <View style={styles.data}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            dispatch(addToCart(item));
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.search}>Search</Text>
        <View style={styles.inputStyle}>
          <Icon name="search1" size={20} style={styles.iconStyle} />
          <TextInput placeholder="Search items" style={styles.textInputStyle} />
        </View>
        <View>
          <Text style={styles.recent}>Recent Searches</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Rocoto</Text>
          <Text style={styles.text}>Lomo</Text>
          <Text style={styles.text}>Saltado</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Papas</Text>
          <Text style={styles.text}>Huancaina</Text>
          <Text style={styles.text}>Relleno</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Contrary</Text>
          <Text style={styles.text}>There</Text>
          <Text style={styles.text}>Passage</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Source</Text>
          <Text style={styles.text}>Cicero</Text>
          <Text style={styles.text}>Treatise</Text>
        </View>
        <Text style={styles.recent}>Recommended</Text>
        <FlatList
          data={GroceryProduct}
          renderItem={PopularProducts}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
