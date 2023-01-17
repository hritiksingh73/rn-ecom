import React from 'react';
import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import CustomButton from '../../../components/Button';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../../../components/Input';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';

const EditProfile = () => {
  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
  });

  return (
    <View style={globalStyle.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon
          size={100}
          icon={() => <AntDesign name="user" size={50} />}
        />
        <Text style={styles.avatarBottomTxt}>Upload Photo</Text>
      </View>

      <View style={styles.nameContainer}>
        <Input
          name="firstName"
          control={control}
          label="First Name"
          style={styles.firstName}
        />
        <Input
          name="lastName"
          control={control}
          label="Last Name"
          style={styles.firstName}
        />
      </View>
      <Input name="Email" control={control} label="Email" />
      <Input name="Phone Number" control={control} label="Phone Number" />

      <View style={styles.btnContainer}>
        <CustomButton btnTitle="Save" />
      </View>
    </View>
  );
};
export default EditProfile;
