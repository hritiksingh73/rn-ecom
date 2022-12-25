import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {debounce} from 'lodash';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import DropDown from '../../component/DropDown';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';

const DisplayVariety = () => {
  const {productData} = useSelector(state => state.userInfo);
  const navigation = useNavigation();
  // const [suggestions, setSuggestions] = useState('');
  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 500);
  //   };
  // };

  // const handleChange = value => {
  //   fetch("https://demo.dataverse.org/api/search?q=${value}")
  //     .then(res => res.json())
  //     .then(json => setSuggestions(json.data.items));
  // };
  // const optimizedFn = useCallback(debounce(handleChange), []);

  const shoppingCards = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
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
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <DropDown />
      <View style={styles.searchBar}>
        <Icon name="search1" size={20} style={styles.searchIcon} />
        <TextInput
          placeholder="Find Store"
          style={styles.txtFields}
          //onChange={e => optimizedFn(e.target.value)}
        />
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
