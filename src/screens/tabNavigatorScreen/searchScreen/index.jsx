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
import colors from '../../../redux/constants/colors';
import remoteConfig from '@react-native-firebase/remote-config';

const data = [
  {
    id: '1',
    name: 'Ajay Vege store',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables5.jpeg'),
    place: 'indore',
  },
  {
    id: '2',
    name: 'Chourasia stall',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables4.jpeg'),
    place: 'dewas',
  },
  {
    id: '3',
    name: 'Mukesh stall',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables7.jpeg'),
    place: 'ujjain',
  },
  {
    id: '4',
    name: 'Ram Fruit',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables6.jpeg'),
    place: 'bhopal',
  },
  {
    id: '5',
    name: 'Apna stall',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables11.jpg'),
    place: 'sagar',
  },
  {
    id: '6',
    name: 'Gatuam Fruits',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables12.jpeg'),
    place: 'ujjain',
  },
  {
    id: '7',
    name: 'Chouhan vegies',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables3.jpeg'),
    place: 'sagar',
  },
  {
    id: '8',
    name: 'Om fruit suppliers',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables8.jpeg'),
    place: 'bhopal',
  },
  {
    id: '9',
    name: 'Mustafa Shop',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables9.jpg'),
    place: 'indore',
  },
  {
    id: '10',
    name: 'Pralahd Shop',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables10.jpeg'),
    place: 'dewas',
  },
  {
    id: '11',
    name: 'A One Fruit Center',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables14.jpeg'),
    place: 'indore',
  },
  {
    id: '12',
    name: 'Vegies bhandar',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables15.jpeg'),
    place: 'dewas',
  },
  {
    id: '13',
    name: 'Fruit Shop',
    rating: '* * * * *',
    url: require('../../../assets/images/vegetables13.jpeg'),
    place: 'bhopal',
  },
];

const HomeScreen = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isEmptyString, setIsEmptyString] = useState('');
  const [remoteConf, setRemoteConf] = useState();

  const [cities, setCities] = useState();

  Testing = async () => {
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
    Testing();
  }, []);

  const SearchCityShop = input => {
    setIsEmptyString(input);
    let response = data.filter(item => {
      return item.place.toUpperCase().includes(input.toUpperCase());
    });
    setFilteredData(response);
  };

  const SelectedCity = (val) => {
    setIsEmptyString(val.name);
    console.log('isEmptyString::::::', isEmptyString)
    console.log('SelectedCity:   ', val.name) 

    let response = data.filter(item => {
      return item.place.toUpperCase().includes((val.name).toUpperCase());
    });
    setFilteredData(response);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HorizMargin}>
        <View style={{backgroundColor: colors.primary}}>
          
          <DropDown data={remoteConf} SelectedCity={SelectedCity}/>

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
                    <Text style={styles.itemRating}>{item.rating}</Text>
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
