import React, {useState, useEffect} from 'react';
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
import remoteConfig from '@react-native-firebase/remote-config';
import ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import data from '../../../data/searchSrnData';

const HomeScreen = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isEmptyString, setIsEmptyString] = useState('');
  const [remoteConf, setRemoteConf] = useState();

  const [cities, setCities] = useState();

  const RemoteConfigDataHandler = async () => {
    await remoteConfig().setDefaults({
      change_the_city: 'DefaultValue',
    });
    await remoteConfig().fetch(10);

    const response = await remoteConfig()?.getValue('change_the_city');
    const res = JSON.parse(response.asString()).cities;
    // console.log('remoteConfig response ---->  ', res);

    setRemoteConf(res);
    // console.log(remoteConf)
  };

  useEffect(() => {
    RemoteConfigDataHandler();
  }, []);

  const SearchCityShop = input => {
    setIsEmptyString(input);
    let response = data.filter(item => {
      return item.place.toUpperCase().includes(input.toUpperCase());
    });
    setFilteredData(response);
  };

  const StarCounterFun = val => {
    let a = Math.floor(val);
    var star = '';
    for (i = 1; i <= a; i++) {
      star += '*';
    }
    console.log('start:', star);
    return star;
  };

  const SelectedCity = val => {
    setIsEmptyString(val.name);
    console.log('isEmptyString::::::', isEmptyString);
    console.log('SelectedCity:   ', val.name);
    let response = data.filter(item => {
      return item.place.toUpperCase().includes(val.name.toUpperCase());
    });
    setFilteredData(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HorizMargin}>
        <View style={styles.bgColor}>
          <DropDown data={remoteConf} SelectedCity={SelectedCity} />

          <View>
            <FlatList
              data={cities}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text>{item.label}</Text>
                    <Text>{item.rating}</Text>
                  </View>
                );
              }}
            />
          </View>

          <View style={styles.txtContainer}>
            <Feather name={'search'} size={22} />
            <TextInput
              style={styles.txtFields}
              placeholder="Find Store"
              onChangeText={input => {
                SearchCityShop(input);
              }}
            />
          </View>

          <FlatList
            data={isEmptyString === '' ? data : filteredData}
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
                    {/* <Text style={styles.itemRating}>{item.rating}</Text> */}
                    <Text style={styles.itemRating}>
                      {StarCounterFun(item.rating)}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
