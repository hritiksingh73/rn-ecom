import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import globaStyle from '../../../constants/globalStyle';
import ItemList from '../../../components/ItemList';
import {useSelector} from 'react-redux';

const ItemSearch = ({navigation}) => {
  const productData = useSelector(state => state.user.productData);

  return (
    <SafeAreaView style={globaStyle.outerContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                style={styles.goBackIcon}
                name={'chevron-left'}
                size={25}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>Search</Text>
            <View></View>
          </View>

          <TextInput
            style={styles.txtInputStyles}
            placeholder={'Search Items'}
          />

          <Text style={styles.productHeading}>Recent Searches</Text>




          <View style={styles.recentSearchContainer}>
            <View style={styles.recentSearchContainerRow}>
              <View styles={{
                flex: 1,
                        borderWidth: 1, 
                        borderRadius: 20,}}>
                <Text style={{}}>hello</Text>

              </View>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
            </View>
            <View style={styles.recentSearchContainerRow}>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
            </View>
            <View style={styles.recentSearchContainerRow}>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
            </View>
            <View style={styles.recentSearchContainerRow}>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
              <Text style={styles.searchedText}>hello</Text>
            </View>
          </View>




          <TouchableOpacity onPress={() => navigation.navigate('Fruits')}>
            <Text style={styles.productHeading}>Recommended</Text>
          </TouchableOpacity>
          <ItemList data={productData} showHorizontal={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemSearch;
