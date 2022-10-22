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
import styles from '../HomeScreen/styles';
//import { Dropdown } from 'rn-material-dropdown';

// const country = [
//   {label: 'India', value: '1'},
//   {label: 'Usa', value: '2'},
//   {label: 'Russia', value: '3'},
//   {label: 'China', value: '4'},
// ];

const shoppingCards = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.selectionCard}>
        <Image
          style={styles.cardImage}
          source={item.image}
          resizeMode="contain"
        />
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <Dropdown/> */}
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
