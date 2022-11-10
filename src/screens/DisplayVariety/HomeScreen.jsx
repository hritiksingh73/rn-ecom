import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Cards from '../../dummyData/Cards';
import { Rating } from 'react-native-ratings';
import styles from './styles';
const shoppingCards = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.selectionCard}>
        <Image
          style={styles.cardImage}
          source={item.image}
          resizeMode="contain"
        />
        <Rating imageSize={15} ratingCount={5} />
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <Dropdown data={country} label='Favorite Fruit'/> */}
      <View style={styles.searchBar}>
        <Icon name="search1" size={28} />
        <TextInput placeholder="Find Store" />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={Cards}
        renderItem={shoppingCards}
        numColumns={2}
      />
    </SafeAreaView>
  );
};



export default HomeScreen;
