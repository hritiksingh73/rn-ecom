import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VegetablesApi from '../../../api/localVegetablesapi/VegetablesApi';
import ItemList from '../../../components/ItemList';
import styles from './styles';

const VegetablesGalleryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.topLeftHeader}
          onPress={() => navigation.navigate('Sort')}>
          <MaterialCommunityIcons name={'sort-descending'} size={25} />
          <Text style={styles.sortStyl}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightHeader}>
          <MaterialCommunityIcons name={'sort-variant'} size={25} />
          <Text style={styles.sortStyl}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ItemList data={VegetablesApi} />
    </SafeAreaView>
  );
};

export default VegetablesGalleryScreen;