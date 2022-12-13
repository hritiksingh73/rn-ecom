import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import remoteConfig from '@react-native-firebase/remote-config';
import {Rating} from 'react-native-ratings'

import DropDown from '../../../components/DropDown';
import Veggies from '../../../data/Veggies';
import styles from './styles.js';

const HomeScreen = ({navigation}) => {
  const homeItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.veggies}>
          <TouchableOpacity onPress={() => navigation.navigate('Super Fresh')}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
          <Rating
          ratingCount={item.rating.rate}
          style={styles.rating}
          imageSize={15}
        />
          </View>
      </View>
    );
  };

  return (
    <View style={styles.mainHeader}>
      <DropDown />
      <View style={styles.input}>
        <Icon name="search1" size={20} style={styles.textInput} />
        <TextInput placeholder="Find Store" style={styles.textInput} />
      </View>
      <FlatList data={Veggies} renderItem={homeItem} numColumns={2} />
    </View>
  );
};

export default HomeScreen;
