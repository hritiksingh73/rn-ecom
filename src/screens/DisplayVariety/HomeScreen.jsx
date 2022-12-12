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

const shoppingCards = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageCard} source={{uri: item.image}} />
        <Text style={styles.imagerating}>Rating:-{item.rating.rate}</Text>
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const {productData} = useSelector(state => state.userInfo);
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
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

export default HomeScreen;
