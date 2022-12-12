import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PulsesApi from '../../../api/localPulsesapi/PulsesApi';
import ItemList from '../../../components/ItemList';
import styles from './styles';

const PulsesGalleryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.topLeftHeader}
          onPress={() => navigation.navigate('Sort')}>
          <MaterialCommunityIcons name={'sort-descending'} size={25} />
          <Text style={styles.sortStyl}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topRightHeader}
          onPress={() => navigation.navigate('VegetablesGallery')}>
          <MaterialCommunityIcons name={'sort-variant'} size={25} />
          <Text style={styles.sortStyl}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ItemList data={PulsesApi} />
    </SafeAreaView>
  );
};

export default PulsesGalleryScreen;
