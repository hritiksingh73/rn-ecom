import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import AccountInfo from '../../../components/AccountInfo';
import {useNavigation, useRoute} from '@react-navigation/native';
import {editAddress} from '../../../redux/action/Action.js';
import {useForm, Controller} from 'react-hook-form';
import AddressInput from '../../../components/AddressInput';
import guidGenerator from '../../../utils/guidGenerator';

const EditAddressScreen = ({route}) => {
  const address = useSelector(state => state.userData.userAddress);
  console.log(address);
  //const addressId = useRoute().params.id;
  const addressId = route.params;
  //   console.log(addressId)
  const currentAddress = address.filter(item => item.id === addressId);

  const defaultFieldValue = {...currentAddress[0]};
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: defaultFieldValue,
  });

  const navigation = useNavigation();

  const submitHandler = data => {
    //console.log('---------->>>>>>>>>', data);
    dispatch(editAddress(data));

    navigation.navigate('Manage Address');
    // navigation.goBack('');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <AntDesign name="left" size={25} onPress={() => goBack()} />
        <Text style={styles.headingText}>Edit Address</Text>
      </View>

      <View style={styles.inputStyle}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AddressInput
              placeholder="First Name"
              placeholderTextColor="black"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}
          name="firstname"
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
            <AddressInput
              placeholder="Last Name"
              placeholderTextColor="black"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          name="lastname"
        />
      </View>

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AddressInput
            placeholder="Mobile No"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="mobileno"
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
          <AddressInput
            placeholder="Area"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="area"
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
          <AddressInput
            placeholder="Address"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="address"
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
          <AddressInput
            placeholder="Street"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="street"
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
          <AddressInput
            placeholder="House"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="house"
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
          <AddressInput
            placeholder="Block"
            placeholderTextColor="black"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name="block"
      />

      <View style={styles.btnStyle}>
        <View>
          <Button
            title="Cancel"
            color="green"
            onPress={() => navigation.navigate('Manage Address')}
          />
        </View>
        <View style={styles.buttonText}>
          <Button
            title="Save Edit"
            color="white"
            onPress={handleSubmit(submitHandler)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAddressScreen;
