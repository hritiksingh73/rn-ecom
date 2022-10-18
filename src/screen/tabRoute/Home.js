/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const ShopKeeperData = [
  {
    id: 1,
    name: 'Anything',
    image: require('../../assests/shopkeeper1.jpeg'),
  },

  {
    id: 2,
    name: 'Anything',
    image: require('../../assests/shopkeeper2.jpeg'),
  },

  {
    id: 3,
    name: 'Anything',
    image: require('../../assests/Shopkeeper3.jpeg'),
  },

  {
    id: 4,
    name: 'Anything',
    image: require('../../assests/shopkeeper4.webp'),
  },

  {
    id: 5,
    name: 'Anything',
    image: require('../../assests/shopkeeper5.jpeg'),
  },

  {
    id: 6,
    name: 'Anything',
    image: require('../../assests/shopkeeper6.webp'),
  },
  {
    id: 7,
    name: 'Anything',
    image: require('../../assests/shopkeeper7.jpeg'),
  },
  {
    id: 8,
    name: 'Anything',
    image: require('../../assests/shopkeeper8.jpeg'),
  },
  {
    id: 9,
    name: 'Anything',
    image: require('../../assests/shopkeeper9.jpeg'),
  },
  {
    id: 10,
    name: 'Anything',
    image: require('../../assests/shopkeeper10.jpeg'),
  },
];
const Home = ({navigation}) => {
  const checkCondition = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={item.image} style={{height: 100, width: 200}} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.design}
        placeholder="Find store"
        placeholderTextColor={'black'}
      />
      <IconAntDesign name={'search1'} size={25} style={styles.icon} />
      <FlatList
        data={ShopKeeperData}
        renderItem={checkCondition}
        //ItemSeparatorComponent={itemseparator}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  design: {
    fontSize: 20,

    borderColor: 'orange',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    width: '80%',
    margin: 15,
    padding: 10,
    paddingHorizontal: 30,
    bottom: '-10%',
  },
  icon: {
    bottom: '-3%',
    right: '35%',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    top: 60,
    right: 50,
  },
});
export default Home;
