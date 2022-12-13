import React from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import GroceryProduct from '../../../data/GroceryProduct.js';
import styles from './styles.js';

const Search = ({navigation}) => {
  const groceryItem = ({item}) => {
    return (
      <View style={styles.data}>
        <TouchableOpacity>
          <Image source={item.image} style={styles.flatlistData} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dollar}>{item.dollar}</Text>
          <View style={styles.button}>
            <Button title="Add to Cart" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.search}>Search</Text>
      <View style={styles.input}>
        <Icon name="search1" size={20} />
        <TextInput placeholder="Search items" style={styles.placeholder} />
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
        horizontal={true}
        data={GroceryProduct}
        renderItem={groceryItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Search;
