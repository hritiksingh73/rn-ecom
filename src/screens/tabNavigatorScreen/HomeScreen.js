import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import DropDown from '../../components/DropDown';
import colors from '../../redux/constants/colors';

const data = [
  {	name: 'Name 1',	rating: '* * * * *', },
  {	name: 'Name 2',	rating: '* * * * *', },
  {	name: 'Name 3',	rating: '* * * * *', },
  {	name: 'Name 4',	rating: '* * * * *', },
  {	name: 'Name 5',	rating: '* * * * *', },
  {	name: 'Name 6',	rating: '* * * * *', },
  {	name: 'Name 7',	rating: '* * * * *', },
  {	name: 'Name 8',	rating: '* * * * *', },
  {	name: 'Name 9',	rating: '* * * * *', },
  {	name: 'Name 10',	rating: '* * * * *', },
  {	name: 'Name 11',	rating: '* * * * *', },
  {	name: 'Name 12',	rating: '* * * * *', },
  {	name: 'Name 13',	rating: '* * * * *', },
];

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: colors.PRIMERY}}>

		  <DropDown />

		  <View style={styles.txtContainer}>
			<Feather name={'search'} size={22} />
			<TextInput style={styles.txtFields} placeholder="Find Store" />
		  </View>	

          <FlatList
            data={data}
            numColumns="2"
            renderItem={({item}) => {
              return (
                <View style={styles.itemOuterContainer}>
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.itemImage}
                      resizeMode="contain"
                      source={require('../../assets/images/fruits1.webp')}
                      />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemRating}>{item.rating}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
  },
  txtContainer: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    marginVertical: 20,
    marginHorizontal: '4%',
	flexDirection: 'row',
	// flex: 1,
	
  },
  txtFields: {
    fontSize: 18,
	paddingLeft: 10,
  },
  itemOuterContainer: {
    width: '46%',
    height: 200,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 3,
    margin: '2%',
  },
  itemContainer: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  itemTextContainer: {
    width: '100%',
    height: '30%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  itemName: {
    fontSize: 16,
    padding: 8,
    paddingBottom: 2,
  },
  itemRating: {
    fontSize: 25,
    padding: 8,
    paddingTop: 2,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
