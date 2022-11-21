import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import Data from '../../homeData/Data.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';


const renderItem = ({item}) => {
    return (
        <View style={styles.data}>
          <Image source={item.image} style={styles.flatlistData} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dollar}>{item.dollar}</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.cart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      );
}

const PopularProductScreen = () => {
   return (
    <SafeAreaView>
        <View style={styles.product}>
        <AntDesign name="left" size={30}/>
        <Text style={styles.text}>Poppular Products</Text>
        <Icon name="bell-badge-outline" size={30} />
        </View>
        <View style={styles.main}>
        <View style={styles.sort}>
        <View style={styles.item}>
         <Text style={styles.sortItem}>Sort</Text>
        </View>
        <View style={styles.filter}>
       <AntDesign name="filter" size={20} style={styles.size}/>
          <Text style={styles.filterItem}>Filter</Text>
        </View>
        </View>
        </View>
        <FlatList data={Data}
        numColumns={2}
        renderItem={renderItem}/>
      
        </SafeAreaView>
   ) 
}

const styles = StyleSheet.create({
   container:{
    flex:1
   },
   product:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
   },
   text:{
    fontSize:20
   },
   title:{
    marginLeft:10,
    margin:5
   },
   dollar:{
    marginLeft:10
   },
   flatlistData: {
    marginTop: 20,
    height: 150,
    width: 200,
    margin: 5,
  },
  cart:{
    margin:10,
    fontSize:15
  },
  data: {
    borderWidth: 1,
    borderColor: 'grey',
  },
   main:{
    borderWidth:1,
    borderColor:'lightgrey',
    margin:8
   },
   sort:{
    flexDirection:'row',
    justifyContent: 'space-around',
   },
   filter:{
    flexDirection:'row',
   },
   sortItem:{
    margin:20,
    fontSize:15
   },
   filterItem:{
    margin:20,
    fontSize:15
   },
   size:{
    margin:15
   }
})

export default PopularProductScreen;