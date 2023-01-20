import React from 'react';
import {View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import AddAddress from '../../../components/AddAddress';
import {updateAddress} from '../../../redux/action/action';
import {idGenerator} from '../../../utils/idGenerator';

const AddAddressScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();

  const saveAddress = data => {
    const addressData = {
      id: idGenerator(),
    };

    dispatch(updateAddress(data, ...addressData.id));
    navigation.navigate('manageAddress');
  };

  return (
    <View style={{marginTop: 50}}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AddAddress
            onBlur={onBlur}
            onChangeText={item => onChange(item)}
            value={value}
            label="Full Name"
          />
        )}
        name="FullName"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AddAddress
            onBlur={onBlur}
            onChangeText={item => onChange(item)}
            value={value}
            label="Address"
          />
        )}
        name="address"
      />
      <Button title="Add" onPress={handleSubmit(saveAddress)} />
    </View>
  );
};

export default AddAddressScreen;
