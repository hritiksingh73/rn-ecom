import React from 'react';
import {Text, Image, FlatList, View, TextInput} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDown from '../../components/DropDown';
import {styles} from './styles';

const HomeScreen = () => {
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
};
export default HomeScreen;
