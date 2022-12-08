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
import DropDown from '../../components/DropDown/index';
import Veggies from '../../homeData/Veggies.js';
import styles from './styles.js';
import remoteConfig from '@react-native-firebase/remote-config';

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
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <DropDown />
      <View style={styles.input}>
        <Icon name="search1" size={20} style={styles.textInput} />
        <TextInput placeholder="Find Store" style={styles.textInput} />
      </View>
      <FlatList data={Veggies} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default HomeScreen;
