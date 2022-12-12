import React from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import CATEGORIES from '../../data/dummy-data';
import DropDown from '../../components/DropDown';
import {styles} from './styles';
import ListItem from '../../components/ListItem';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderGroceryShops = props => {
    const {item} = props;

    return (
      <View style={styles.renderItemScreen}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('Super Fresh')}>
          <Image source={item.image} style={styles.imgStyle} />
        </TouchableOpacity>
        <Text style={styles.shopTitle}>{item.title}</Text>
        <Text style={styles.shopTitle}>{item.rating}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <DropDown />

      <View style={styles.searchSection}>
        <AntDesign
          name="search1"
          size={20}
          color="black"
          style={styles.input}
        />
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
