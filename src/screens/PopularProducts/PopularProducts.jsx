import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {getInitialData} from '../../redux/thunk/ProductThunk';
import styles from './styles';
import Sort from 'react-native-vector-icons/Octicons';
import Filter from 'react-native-vector-icons/Ionicons';


const PopularProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.userInfo.productData);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const ListData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <Text style={styles.mainContainer}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text>Add to Cart</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.headerBar}>
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={30}
            onPress={() => navigation.navigate('SuperFresh')}
          />
        </TouchableOpacity>
        <Text style={styles.popularProducts}>Popular Product</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>

      <View style={styles.choices}>
        <View style={styles.filter}>
          <Sort name="sort-desc" size={24} color="black" />
          <Text>Sort</Text>
        </View>

        <View style={styles.filter}>
          <Filter name="filter" size={24} color="black" />
          <Text>Filter</Text>
        </View>
      </View>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={ListData}
      />
    </SafeAreaView>
  );
};

export default PopularProducts;
