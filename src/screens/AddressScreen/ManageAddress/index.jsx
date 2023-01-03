import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';

import ListItem from '../../../components/ListItem';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import {deleteUserAddress} from '../../../redux/actions/userAction';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../../constant/color';

const ManageAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const address = useSelector(state => state.userDataReducer.address);
  // console.log('get address---->', address);

  const renderAddressDetail = ({item}) => {
    return (
      <View style={styles.addressDetailContainer}>
        <View style={{margin: 15}}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameStyle}>
              {item.firstName} {item.lastName}
            </Text>

            <View style={styles.iconContainer}>
              <AntDesign
                name="form"
                size={20}
                style={styles.iconStyle}
                onPress={() => {
                  navigation.navigate('Edit Address', {
                    addressId: item.id,
                  });
                }}
              />
              <AntDesign
                name="delete"
                size={20}
                style={styles.iconStyle}
                onPress={() => dispatch(deleteUserAddress(item))}
              />
            </View>
          </View>

          <Text style={{fontSize: 16}}>
            {item.area},{item.addressType},{item.street},{item.house},
            {item.block}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <ListItem data={address} renderItem={renderAddressDetail} />

      <View style={styles.btnContainer}>
        <Button
          mode="contained-tonal"
          buttonColor={color.primary}
          style={{width: '40%'}}
          labelStyle={{color: 'white'}}
          onPress={() => navigation.navigate('Add Address')}>
          Add New Address
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default ManageAddress;
