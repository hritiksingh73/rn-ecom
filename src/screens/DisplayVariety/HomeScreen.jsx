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
    width: 190,
    height: 180,
    paddingHorizontal: 5,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
  },
  imageTitle: {
    fontSize: 15,
    color: '#344055',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: '90%',
  },
});

export default HomeScreen;
