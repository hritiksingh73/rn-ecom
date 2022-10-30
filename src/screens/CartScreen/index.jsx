import React, {useEffect, useState} from 'react';
import {FlatList, View, Text,TouchableOpacity} from 'react-native';
import CategoryGridItem from '../../components/CategoryGridItem';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function CategoryScreen() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const ProductListItems = ({item}) => {
    return (
      <View style={styles.productDetailContainer}>
        <CategoryGridItem imgSource={{uri: item.image}} />
        <Text style={styles.itemText}>Price: {item.price} </Text>
        <Text style={styles.itemText}>Category: {item.category} </Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={item => '#' + item.id}
      data={data}
      numColumns={2}
      contentContainerStyle={styles.itemStyle}
      renderItem={ProductListItems}
    />
  );
}
