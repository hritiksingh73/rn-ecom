import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import DropDown from '../../../components/dropDown';
import colors from '../../../redux/constants/colors';

const data = [
  {name: 'Name 1', rating: '* * * * *', url: require('../../../assets/images/vegetables5.jpeg')},
  {name: 'Name 2', rating: '* * * * *', url: require('../../../assets/images/vegetables4.jpeg')},
  {name: 'Name 3', rating: '* * * * *', url: require('../../../assets/images/vegetables7.jpeg')},
  {name: 'Name 4', rating: '* * * * *', url: require('../../../assets/images/vegetables6.jpeg')},
  {name: 'Name 5', rating: '* * * * *', url: require('../../../assets/images/vegetables11.jpg')},
  {name: 'Name 6', rating: '* * * * *', url: require('../../../assets/images/vegetables12.jpeg')},
  {name: 'Name 7', rating: '* * * * *', url: require('../../../assets/images/vegetables3.jpeg')},
  {name: 'Name 8', rating: '* * * * *', url: require('../../../assets/images/vegetables8.jpeg')},
  {name: 'Name 9', rating: '* * * * *', url: require('../../../assets/images/vegetables9.jpg')},
  {name: 'Name 10', rating: '* * * * *', url: require('../../../assets/images/vegetables10.jpeg')},
  {name: 'Name 11', rating: '* * * * *', url: require('../../../assets/images/vegetables14.jpeg')},
  {name: 'Name 12', rating: '* * * * *', url: require('../../../assets/images/vegetables15.jpeg')},
  {name: 'Name 13', rating: '* * * * *', url: require('../../../assets/images/vegetables13.jpeg')},
];

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: colors.primary}}>
          <DropDown />

          <View style={styles.txtContainer}>
            <Feather name={'search'} size={22} />
            <TextInput style={styles.txtFields} placeholder="Find Store" />
          </View>

          <FlatList
            data={data}
            numColumns="2"
            renderItem={({item}) => {
              return (
                <View style={styles.itemOuterContainer}>
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.itemImage}
                      resizeMode="cover"
                      source={item.url}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemRating}>{item.rating}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
