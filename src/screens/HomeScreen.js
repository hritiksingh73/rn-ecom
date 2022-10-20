import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDown from '../components/DropDown';
import Veggies from '../homeData/Veggies';

const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.veggies}>
        <Image source={item.image} style={styles.image} />
        <Text style ={styles.text}>{item.rating}</Text>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
};
const Home = () => {
  return (
    <SafeAreaView>
      <DropDown/>
      <View style={styles.input}>
        <Icon name="search1" size={20}/>
        <TextInput placeholder="Find Store"/>
      </View>
      <FlatList data={Veggies} renderItem={renderItem} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  veggies: {
    height: 180,
    width: 200,
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  image: {
    borderWidth: 1,
    height: 130,
    width: 180,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 80,
    marginLeft: 20,
    width: 320,
    height:40,
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Home;
