import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../redux/thunk/productThunk.js';
import Data from '../homeData/Data.js'
import Veggies from '../homeData/Veggies.js'

const Cart = ({navigation}) => {

  const dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userData);

  // useEffect(() => {
  //  dispatch(getInitialData());
  // }, []);
  const apiCall = () => {
    dispatch(getInitialData());
  };

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
    <SafeAreaView>
      <ActivityIndicator animating={isFetching} />
      <View style={styles.icon}>
        <Icon name="bars" size={20} />
        <Text style={styles.text}>Super Fresh</Text>
        <Icon name="bells" size={20} />
      </View>
      <View style={styles.vegetables}>
        <Image
          source={require('../assets/image3.jpeg')}
          style={styles.image}
        />
        <View style={styles.superImage}>
          <Text style={{fontSize: 18, margnLeft:50}}>Super Fresh</Text>
          <Rating imageSize={15} ratingCount={5} />
        </View>
        </View>
      <ImageBackground
        source={require('../assets/vegetable.jpeg')}
        style={styles.super}>
        <Text style={styles.fresh}>Super Fresh</Text>
        <Text style={styles.list}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </ImageBackground> 
      {/* <View style={styles.veggies}>
      <FlatList horizontal={true} data={Veggies}
      renderItem={renderItem}/>
      </View>  */}
      <View style={styles.button}>
      <Button title="Cart" onPress={apiCall} />
      </View>
      <Text style={styles.products}>Popular Products</Text>
      <FlatList horizontal ={true}
        data={Data}
        //data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  icon:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text:{
    fontSize:20
  },
  data:{
    borderWidth:1,
    borderColor:'grey'
  },
  dollar:{
    fontSize:18,
    color:'green',
    marginLeft:10
  },
  products:{
    fontSize:20,
    margin:10
  },
  title:{
    fontSize:18,
    marginLeft:10,
    margin:10
  },
  button:{
    margin:10
  },
  veggies:{
    height:500,
    width:200,
  },
  fresh:{
    fontSize:30,
    marginLeft:100,
    marginTop:60,
    color:'white',
    fontWeight:'bold'
  },
  superImage:{
    marginLeft:20,
  },
  flatlistData:{
    marginTop:20,
    height:200,
    width:220,
    margin:5
  },
  list:{
    fontSize:15,
    marginLeft:80,
    padding:10,
    color:'white',
  },
 vegetables:{
    flexDirection:'row',
    padding:20,
    justifyContent: 'center',
    
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 120,
    paddingHorizontal:20,
  },
  placeholder: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 80,
  },
  super:{
    height: 200,
    width: 400,
    marginLeft:10
  },
});

export default Cart;
