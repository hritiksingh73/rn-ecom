import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Platform,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDown from '../components/DropDown';

export default function HomeScreen() {
  const renderGroceryShops = grocery => {
    return (
      <View style={styles.renderItemScreen}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: grocery.item.imageUrl}}
            style={styles.imgStyle}
          />
        </View>
        <Text style={styles.shopTitle}>{grocery.item.title}</Text>
        <Text style={styles.shopTitle}>{grocery.item.rating}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <DropDown />

      <View style={styles.searchSection}>
        <Icon name="search1" size={20} color="black" style={styles.input} />
        <TextInput placeholder="Find Store" style={styles.input} />
      </View>

      <FlatList
        data={CATEGORIES}
        renderItem={renderGroceryShops}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  renderItemScreen: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {
    resizeMode: 'stretch',
    width: '100%',
    height: 160,
    marginTop: 15,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '9%',
    backgroundColor: 'lightgrey',
  },
  input: {
    padding: 8,
  },
  shopTitle: {
    fontSize: 18,
    color: 'black',
  },
});
