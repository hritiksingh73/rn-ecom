import React from 'react';
import {View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import AddAddress from '../../components/AddAddress';
import {useDispatch, useSelector} from 'react-redux';
import {editAddress} from '../../redux/action/action';

const EditUser = ({navigation, route}) => {
  const {control, handleSubmit} = useForm({defaultValues: defaultValue});
  const dispatch = useDispatch();
  const addressDetail = useSelector(state => state.counter.addressDetail);

  const receivedId = route.params;
  const updatedAddress = addressDetail.filter(item => item.id === receivedId);

  const defaultValue = {...updatedAddress[0]};

  const saveAddress = data => {
    dispatch(editAddress(data));
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
      <Button title="Edit" onPress={handleSubmit(saveAddress)} />
    </View>
  );
};

export default EditUser;
