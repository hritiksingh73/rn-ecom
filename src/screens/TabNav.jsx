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
// import { Dropdown } from 'rn-material-dropdown';
import Cards from '../dummyData/Cards';

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

const TabNav = () => {
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    width: 350,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  selectionCard: {
    height: 200,
    width: 220,
    padding: 5,
    backgroundColor: 'rgbs(255,255,255,0.90)',
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOffset: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  imageTitle: {
    fontSize: 20,
    color: '#344055',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: '80%',
    flexDirection: 'row',
  },
});

export default TabNav;
