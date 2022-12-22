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
import shopKeeperData from '../../../staticData/shopKeeperData';

const SearchScreen = () => {
  const [isSelected, setisSelected] = useState('');
  const renderData = ({item, index}) => {
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
        data={shopKeeperData}
        renderItem={renderData}
        numColumns={2}
        //ItemSeparatorComponent={itemseparator}
      />
      <Button onPress={fetchValue} title="Learn More" color="#841584" />
    </ScrollView>
  );
};
export default SearchScreen;
