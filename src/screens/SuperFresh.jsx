import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import Hearto from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../redux/thunk/ProductThunk';

const SuperFresh = () => {
  const Dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.userInput);

  // useEffect(() => {
  //   Dispatch(getInitialData());
  // }, []);
  const apiCall = () => {
    Dispatch(getInitialData());
  };

  const ListData = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemRow}>
        <Text>{item.title}</Text>
        {/* <Image source={{uri:item.image}}/> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ActivityIndicator animating={isFetching} />
      <View style={styles.headerBar}>
        <Icon name="menu" size={30} />
        <Text style={{fontSize: 25}}>Super Fresh</Text>
        <Bell name="bell-badge-outline" size={30} />
      </View>
      <View style={styles.ratingcontainerchild}>
        <Image
          source={require('../asset/grocerry.jpeg')}
          style={styles.tinyIcon}
        />
        <View style={styles.ratingcontainer}>
          <Text style={{fontSize: 18}}>Super Fresh</Text>
          <Rating imageSize={15} ratingCount={5} />
        </View>
        <Hearto name="hearto" size={24} style={styles.favourite} />
      </View>
      <Button title="Fetch Data" onPress={() => apiCall()} />
      <FlatList
        data={productData}
        renderItem={item => ListData(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  ratingcontainerchild: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  favourite: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default SuperFresh;
