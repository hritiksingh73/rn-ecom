import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { AccountScreens } from '../../../config/constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ADDRESS } from '../../../redux/constants';

const AddressCard = ({ name, fullAddress, id }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.addressCardContainer}>
      <Text style={styles.addressHeading}>{name}</Text>
      <Text style={styles.addressText}>{fullAddress}</Text>

      <View style={styles.actionContainer}>
        <AntDesign
          style={styles.iconStyle}
          name="edit"
          size={20}
          color={'grey'}
          onPress={() => {
            navigation.navigate(AccountScreens.EditAddress.screenName, {
              id: id,
            });
          }}
        />
        <AntDesign
          style={styles.iconStyle}
          name="delete"
          size={20}
          color={'grey'}
          onPress={() => {
            dispatch({
              type: REMOVE_ADDRESS,
              payload: { id: id },
            });
          }}
        />
      </View>
    </View>
  );
};

const Addresses = () => {
  const addresess = useSelector(state => state.user.addresses);
  const navigation = useNavigation();
  console.log({ addresess });

  return (
    <View style={styles.container}>
      <FlatList
        data={addresess}
        renderItem={({ item }) => {
          return (
            <AddressCard
              id={item.id}
              name={`${item.firstName} ${item.lastName}`}
              fullAddress={`${item.house}, ${item.street}, ${item.area}, ${item.block}`}
            />
          );
        }}
      />
      <Button
        title={'Add New Address'}
        onPress={() => {
          navigation.navigate(AccountScreens.AddNewAddress.screenName);
        }}
        customStyle={{ alignSelf: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  addressCardContainer: {
    height: 140,
    margin: 20,
    padding: 20,
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 5,
  },
  iconStyle: {
    margin: 10,
    color: 'black',
  },
  addressHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: 'black',
  },
  addressText: {
    flexWrap: 'wrap',
    color: 'gray',
    fontSize: 15,
    color: 'black',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
export default Addresses;
