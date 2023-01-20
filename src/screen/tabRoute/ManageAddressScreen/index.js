/* eslint-disable no-undef */
import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from '../../../components/Icon';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import {removeAddress} from '../../../redux/action/action';

const ManageAddressScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const addressDetail = useSelector(state => state.counter.addressDetail);
  console.log('useSelector', addressDetail);

  const deleteAddress = item => {
    dispatch(removeAddress(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon type={'ionicon'} name={'chevron-back'} size={23} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Manage Addresses</Text>
        </View>

        <FlatList
          data={addressDetail}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            console.log(addressDetail);
            return (
              <View style={styles.addressBlockHeader}>
                <View style={styles.nameDetail}>
                  <Text style={styles.nameStyle}>{item.FullName}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('editUser', item.id)}>
                    <Icon
                      type={'feather'}
                      name="edit"
                      style={styles.iconPosition}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteAddress(item)}>
                    <Icon
                      type={'ant'}
                      name="delete"
                      style={styles.iconPosition}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.addressBlock}>
                  <Text style={styles.textColor}>Building,</Text>
                  <Text style={styles.textColor}>Way no 123, </Text>
                  <Text style={styles.textColor}>Blg no 124</Text>
                </View>
                <View style={styles.addressBlock}>
                  <Text style={styles.textColor}>2nd floor, </Text>
                  <Text style={styles.textColor}>Dewas </Text>
                  <Text style={styles.textColor}>{item.address}</Text>
                </View>
              </View>
            );
          }}
        />
        {/* <View style={styles.addressBlockHeader}>
          <View style={styles.nameDetail}>
            <Text style={styles.nameStyle}>{addressDetail.name}</Text>

            <Icon type={'feather'} name="edit" style={styles.iconPosition} />
            <Icon type={'ant'} name="delete" style={styles.iconPosition} />
          </View>
          <View style={styles.addressBlock}>
            <Text style={styles.textColor}>Building,</Text>
            <Text style={styles.textColor}>Way no 123, </Text>
            <Text style={styles.textColor}>Blg no 124</Text>
          </View>
          <View style={styles.addressBlock}>
            <Text style={styles.textColor}>2nd floor, </Text>
            <Text style={styles.textColor}>Dewas </Text>
            <Text style={styles.textColor}>{addressDetail.address}</Text>
          </View>
        </View> */}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('addAddress')}>
        <Text style={{color: 'white', fontWeight: '500'}}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageAddressScreen;
