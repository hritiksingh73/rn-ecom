import React from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDown from '../../components/DropDown';
import {styles} from './styles';
import ListItem from '../../components/ListItem';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderGroceryShops = grocery => {
    return (
      <View style={styles.renderItemScreen}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Super Fresh')}>
          <Image
            source={{uri: grocery.item.imageUrl}}
            style={styles.imgStyle}
          />
        </TouchableOpacity>
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

      <ListItem
        data={CATEGORIES}
        renderItem={renderGroceryShops}
        numColumns={2}
      />
    </View>
  );
};
export default HomeScreen;
