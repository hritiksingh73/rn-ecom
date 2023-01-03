import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ADD_ADDRESS } from '../../../redux/constants';
import { useNavigation } from '@react-navigation/native';
import { AccountScreens } from '../../../config/constants/screens';

const AddAdress = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submitHandler = data => {
    dispatch({
      type: ADD_ADDRESS,
      payload: data,
    });
    navigation.navigate(AccountScreens.Addreesses.screenName);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.nameInputContainer}>
          <View style={styles.halfInputContainer}>
            <Input
              control={control}
              name="firstName"
              placeholder="First Name"
            />
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
            title="Add"
            onPress={handleSubmit(submitHandler)}
            customStyle={{ margin: 10, width: 130 }}
          />
        </View>
      </ScrollView>
    </>
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

export default AddAdress;
