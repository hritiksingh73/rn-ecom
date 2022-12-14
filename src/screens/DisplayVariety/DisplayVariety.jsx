import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  FlatList,
} from 'react-native';

import React from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import DropDown from '../../component/DropDown';
import {Rating} from 'react-native-ratings';

const shoppingCards = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageCard} source={{uri: item.image}} />
        <Text style={styles.imageTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Rating
          ratingCount={item.rating.rate}
          style={styles.rating}
          imageSize={15}
          readonly="true"
        />
      </View>
    </View>
  );
};

const DisplayVariety = () => {
  const {productData} = useSelector(state => state.userInfo);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <DropDown />
      <View style={styles.searchBar}>
        <Icon name="search1" size={20} style={styles.searchIcon} />
        <TextInput placeholder="Find Store" style={styles.txtFields} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={productData}
        renderItem={shoppingCards}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default DisplayVariety;
