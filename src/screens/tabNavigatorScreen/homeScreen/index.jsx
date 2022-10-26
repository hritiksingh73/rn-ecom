import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import DropDown from '../../../components/dropDown';
import colors from '../../../redux/constants/colors';

const data = [
  {name: 'Name 1', rating: '* * * * *'},
  {name: 'Name 2', rating: '* * * * *'},
  {name: 'Name 3', rating: '* * * * *'},
  {name: 'Name 4', rating: '* * * * *'},
  {name: 'Name 5', rating: '* * * * *'},
  {name: 'Name 6', rating: '* * * * *'},
  {name: 'Name 7', rating: '* * * * *'},
  {name: 'Name 8', rating: '* * * * *'},
  {name: 'Name 9', rating: '* * * * *'},
  {name: 'Name 10', rating: '* * * * *'},
  {name: 'Name 11', rating: '* * * * *'},
  {name: 'Name 12', rating: '* * * * *'},
  {name: 'Name 13', rating: '* * * * *'},
];

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: colors.primary}}>
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
                      source={require('../../../assets/images/fruits1.webp')}
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

export default HomeScreen;
