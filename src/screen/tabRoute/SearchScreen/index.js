import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import DropDown from '../../../components/DropDown';
import remoteConfig from '@react-native-firebase/remote-config';

const ShopKeeperData = [
  {
    id: 1,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper1.jpeg'),
  },

  {
    id: 2,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper2.jpeg'),
  },

  {
    id: 3,
    name: 'DailyNeeds',
    image: require('../../../assests/Shopkeeper3.jpeg'),
  },

  {
    id: 4,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper4.webp'),
  },

  {
    id: 5,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper5.jpeg'),
  },

  {
    id: 6,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper6.webp'),
  },
  {
    id: 7,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper7.jpeg'),
  },
  {
    id: 8,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper8.jpeg'),
  },
  {
    id: 9,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper9.jpeg'),
  },
  {
    id: 10,
    name: 'DailyNeeds',
    image: require('../../../assests/shopkeeper10.jpeg'),
  },
];

const SearchScreen = () => {
  const [isSelected, setisSelected] = useState('');
  const checkCondition = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.space}>
            <Image source={item.image} style={styles.imageStyle} />
          </View>
          <View style={styles.subName}>
            <Text>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const fetchValue = () => {
    remoteConfig()
      .setDefaults({
        City: 'None',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        const changeValue = remoteConfig().getValue('City');
        setisSelected(isSelected(changeValue));
        //console.log(changeValue);
      });
  };
  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <View>
          <DropDown />
        </View>

        <TextInput
          style={styles.design}
          placeholder="Find store"
          placeholderTextColor={'black'}
        />
        <IconAntDesign name={'search1'} size={25} style={styles.icon} />
      </View>
      <FlatList
        data={ShopKeeperData}
        renderItem={checkCondition}
        numColumns={2}
        //ItemSeparatorComponent={itemseparator}
      />
      <Button onPress={fetchValue} title="Learn More" color="#841584" />
    </ScrollView>
  );
};
export default SearchScreen;
