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
import Cards from '../../dummyData/Cards';

// const country = [
//   {label: 'India', value: '1'},
//   {label: 'Usa', value: '2'},
//   {label: 'Russia', value: '3'},
//   {label: 'China', value: '4'},
// ];

const shoppingCards = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <Image
          style={styles.cardImage}
          source={item.image}
          resizeMode="contain"
        />
        <Text style={styles.mainHeader}>{item.title}</Text>
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
    paddingHorizontal: 20,
    
  },
  courseContainer: {
    padding: 30,
    backgroundColor: 'rgbs(255,255,255,0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOffset: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold',
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default TabNav;
