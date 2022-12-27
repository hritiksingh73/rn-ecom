import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import SEARCHITEMS from '../../data/searchItems';
import RelatedProducts from '../../components/RelatedProducts';

const renderSearchItems = ({item}) => {
  return (
    <View style={styles.searchItems}>
      <Text>{item.title}</Text>
    </View>
  );
};

const SearchScreen = () => {
  const {goBack} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Search</Text>
      </View>

      <View style={styles.searchSection}>
        <AntDesign
          name="search1"
          size={20}
          color="black"
          style={styles.input}
        />
        <TextInput placeholder="Search Items" style={styles.input} />
      </View>

      <Text style={styles.recentSearch}>Recent Searches</Text>
      <FlatList
        data={SEARCHITEMS}
        renderItem={renderSearchItems}
        numColumns={3}
        contentContainerStyle={{height: '95%'}}
      />
      <Text style={styles.recommendedTxt}>Recommended</Text>
      <View style={styles.recommendedProductContainer}>
        <RelatedProducts />
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;
