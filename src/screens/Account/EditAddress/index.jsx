import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { AccountScreens } from '../../../config/constants/screens';
import { EDIT_ADDRESS } from '../../../redux/constants';

const EditAddress = () => {
  const address = useSelector(state => state.user.addresses);
  const dispatch = useDispatch();
  const addressId = useRoute().params.id;

  const currentAddress = address.filter(item => item.id === addressId);
  const defaultFieldValue = { ...currentAddress[0] };

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultFieldValue,
  });
  const navigation = useNavigation();

  const submitEditHandler = data => {
    dispatch({
      type: EDIT_ADDRESS,
      payload: { data: data, id: addressId },
    });
    navigation.navigate(AccountScreens.Addreesses.screenName);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nameInputContainer}>
        <View style={styles.halfInputContainer}>
          <Input control={control} name="firstName" placeholder="First Name" />
        </View>
        <View style={styles.halfInputContainer}>
          <Input control={control} name="lastName" placeholder="Last Name" />
        </View>
      </View>
      <Input control={control} name="mobileNo" placeholder="Mobile Number" />
      <Input control={control} name="area" placeholder="Area" />
      <Input control={control} name="areaType" placeholder="Area Type" />
      <Input control={control} name="street" placeholder="Street" />
      <Input
        control={control}
        name="house"
        placeholder="Apartment / House/ Office No"
      />
      <Input control={control} name="block" placeholder="Block (Optional)" />
      <View style={styles.btnContainer}>
        <Button
          title="Cancel"
          onPress={() => {
            console.log('');
          }}
          customStyle={{ margin: 10, width: 130 }}
        />
        <Button
          title="Save Edit"
          onPress={handleSubmit(submitEditHandler)}
          customStyle={{ margin: 10, width: 130 }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    padding: 10,
  },
  nameInputContainer: {
    flexDirection: 'row',
  },
  halfInputContainer: {
    width: '45%',
    margin: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditAddress;
