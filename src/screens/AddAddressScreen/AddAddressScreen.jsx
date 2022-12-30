import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import AddAddressFormComponent from '../../component/FormComponent/AddAddressFormComponent/AddAddressFormComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress} from '../../redux/action/Action';
import {useForm, Controller} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      area: '',
      address: '',
      street: '',
      appartment: '',
      block: '',
    },
  });
  const dispatch = useDispatch();

  const submitHandler = data => {
    console.log({data});
    dispatch(
      addAddress({
        data
        // firstName: firstName,
        // lastName: lastName,
        // mobileNumber: mobileNumber,
        // area: area,
        // address: address,
        // street: street,
        // appartment: appartment,
        // block: block,
      }),
    );
    navigation.goBack('');
    // setFirstName('');
    // setLastName('');
    // setMobileNumber('');
    // setArea('');
    // setAddress('');
    // setStreet('');
    // setAppartment('');
    // setBlock('');
  };

  // const navigation = useNavigation();
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');
  // const [area, setArea] = useState('');
  // const [address, setAddress] = useState('');
  // const [street, setStreet] = useState('');
  // const [appartment, setAppartment] = useState('');
  // const [block, setBlock] = useState('');

  // const addUserAddress = () => {
  //   dispatch(
  //     addAddress({
  //       firstName: firstName,
  //       lastName: lastName,
  //       mobileNumber: mobileNumber,
  //       area: area,
  //       address: address,
  //       street: street,
  //       appartment: appartment,
  //       block: block,
  //     }),
  //   );
  //   navigation.goBack('');
  //   setFirstName('');
  //   setLastName('');
  //   setMobileNumber('');
  //   setArea('');
  //   setAddress('');
  //   setStreet('');
  //   setAppartment('');
  //   setBlock('');
  // };

  return (
    <ScrollView>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="left" size={24} />
            </TouchableOpacity>
            <Text style={styles.AddAddressHeader}>Add Addresses</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.textInputheaderContainer}>
              {/* <AddAddressFormComponent
                placeholder="First Name"
                defaultValue={firstName}
                onChangeText={item => setFirstName(item)}
              />*/}
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Required',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AddAddressFormComponent
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="First Name"
                  />
                )}
                name="firstName"
              />
              {/* {errors.firstName && <Text>This is required.</Text>} */}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AddAddressFormComponent
                    onBlur={onBlur}
                    onChangeText={item => onChange(item)}
                    value={value}
                    placeholder="Last Name"
                  />
                )}
                name="lastName"
              />

              {/* <AddAddressFormComponent
                placeholder="Last Name"
                defaultValue={lastName}
                onChangeText={item => setLastName(item)}
              />  */}
            </View>
            {/* <AddAddressFormComponent
              placeholder="Mobile Number"
              defaultValue={mobileNumber}
              onChangeText={item => setMobileNumber(item)}
              keyboardType="number-pad"
            /> */}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Mobile Number"
                />
              )}
              name="mobileNumber"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Area"
                />
              )}
              name="area"
            />
            {/* <AddAddressFormComponent
              placeholder="Area"
              defaultValue={area}
              onChangeText={item => setArea(item)}
            />*/}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Address Type"
                />
              )}
              name="address"
            />
            {/*  <AddAddressFormComponent
              placeholder="Address Type"
              defaultValue={address}
              onChangeText={item => setAddress(item)}
            /> */}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Street"
                />
              )}
              name="street"
            />
            {/*<AddAddressFormComponent
              placeholder="Street"
              defaultValue={street}
              onChangeText={item => setStreet(item)}
            />*/}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Appartments/House/Office No"
                />
              )}
              name="appartment"
            />
            {/*<AddAddressFormComponent
              placeholder="Appartments/House/Office No"
              defaultValue={appartment}
              onChangeText={item => setAppartment(item)}
            />*/}
            <Controller
              control={control}
              rules={{
                required: {
                  message: 'Required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AddAddressFormComponent
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Block(Optional)"
                />
              )}
              name="block"
            />

            {/*<AddAddressFormComponent
              placeholder="Block(Optional)"
              defaultValue={block}
              onChangeText={item => setBlock(item)}
            /> */}
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              // disabled={
              //   firstName == '' ||
              //   // lastName == '' ||
              //   // mobileNumber == '' ||
              //   // area == '' ||
              //   // address == '' ||
              //   // street == '' ||
              //   appartment == ''
              //     ? true
              //     : false
              // }
              onPress={() => handleSubmit(submitHandler())}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddAddressScreen;
