import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TextInput, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Data from '../homeData/Data.js'
const Search = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.data}>
      <TouchableOpacity>
        
        <Image source={item.image} style={styles.flatlistData} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dollar}>{item.dollar}</Text>
        <View style={styles.button}>
        <Button title = 'Add to Cart'/>
        </View>
      </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.search}>Search</Text>
      <View style={styles.input}>
        <Icon name="search1" size={20} />
        <TextInput placeholder="Search items" style={styles.placeholder}/>
        </View>
        <View>
        <Text style={styles.recent}>Recent Searches</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.text}>Rocoto</Text>
        <Text style={styles.text}>Lomo</Text>
        <Text style={styles.text}>Saltado</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.text}>Papas</Text>
        <Text style={styles.text}>Huancaina</Text>
        <Text style={styles.text}>Relleno</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.text}>Contrary</Text>
        <Text style={styles.text}>There</Text>
        <Text style={styles.text}>Passage</Text>
        </View>
        <View style={styles.main}>
        <Text style={styles.text}>Source</Text>
        <Text style={styles.text}>Cicero</Text>
        <Text style={styles.text}>Treatise</Text>
        </View>
        <Text style={styles.recent}>Recommended</Text>
        <FlatList horizontal ={true}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  search:{
    alignItems:'center',
    marginLeft:150,
    fontSize:20
  },
  placeholder:{
    padding:15,
  },
  title:{
    fontSize:18,
    margin:10,
    marginLeft:10
  },
  button:{
    margin:10
  },
 data:{
    borderWidth:1,
    borderColor:'grey',
    height:300,
  },
  dollar:{
    fontSize:18,
    color:'green',
    marginLeft:10
  },
  flatlistData:{
    marginTop:30,
    height:150,
    width:220,
    },
  recent:{
    fontSize:18,
    fontWeight:'bold',
    margin:10,
    padding:10
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginLeft: 20,
    width: 400,
    height: 50,
   },
   text:{
    borderWidth:1,
    borderRadius:25,
    margin:5,
    padding:16,
    height:50,
    fontSize:14,
    width:120
   },
   main:{
    flexDirection:'row',
   }
});

export default Search;
