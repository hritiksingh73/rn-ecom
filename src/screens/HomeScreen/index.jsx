import React, {useState} from 'react';
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
import DropDown from '../../components/DropDown/index';
import Veggies from '../../homeData/Veggies.js';
import {Rating} from 'react-native-ratings';
import styles from './styles.js';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
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
          <Rating imageSize={20} ratingCount={5} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
        <DropDown />
        <View style={styles.input}>
          <Icon name="search1" size={20} />
          <TextInput placeholder="Find Store" style={styles.textInput} />
        </View>
        <FlatList data={Veggies} renderItem={renderItem} numColumns={2} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
