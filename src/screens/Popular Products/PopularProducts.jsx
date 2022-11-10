import {StyleSheet, Text, View, SafeAreaView, FlatList,TouchableOpacity,Image} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {getInitialData} from '../../redux/thunk/ProductThunk';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const PopularProducts = () => {
  const Dispatch = useDispatch();
  const items = useSelector(state => state.userInfo.productData);


  useEffect(() => {
    Dispatch(getInitialData());
  }, []);


  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.imgContainer}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.mainContainer}>{item.title}</Text>
          <Text style={{color: 'black'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <Icon name="chevron-left" size={30} />
        <Text style={{fontSize: 25}}>Popular Product</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={ ListData}
      />
    </SafeAreaView>
  );
};



export default PopularProducts;
