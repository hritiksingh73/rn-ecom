import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {GROCERIES} from '../../data/groceryICarousel';
import {styles} from './styles';
import CarouselComponent from '../../components/CarouselComponent';
import RelatedProducts from '../../components/RelatedProducts';

const renderSuperFreshItem = ({item}) => {
  return (
    <View style={styles.renderItem}>
      <Image source={{uri: item.imageUrl}} style={styles.carouselImgStyle} />
    </View>
  );
};
const SuperFreshScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcon name="menu" size={30} />
        <Text style={styles.headerText}>Super Fresh</Text>
        <MaterialIcon name="bell-badge-outline" size={30} />
      </View>

      <CarouselComponent data={GROCERIES} renderItem={renderSuperFreshItem} />

      <Text style={styles.productsTxt}>
        Popular Products
        <MaterialIcon
          name="arrow-right"
          size={25}
          onPress={() => navigation.navigate('Popular Products')}
        />
      </Text>
      <RelatedProducts style={{flex: 1}} />
    </SafeAreaView>
  );
};
export default SuperFreshScreen;
