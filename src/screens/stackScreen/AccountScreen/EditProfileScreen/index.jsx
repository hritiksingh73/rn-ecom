import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import PrimaryButton from '../../../../components/PrimaryButton/index';

const EditProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <AntDesign name="left" size={20} onPress={() => goBack()} />
        <Text style={styles.headingText}>Edit Profile</Text>
      </View>
      <Avatar.Image
        size={94}
        style={styles.avatarStyle}
        //   source={require('../assets/avatar.png')}
      />
      <View style={styles.headingTextStyle}>
        <Text style={styles.nameStyle}>Upload Photo</Text>
      </View>

      <View style={styles.userMainBoxNameStyle}>
        <View style={styles.userNameStyle}>
          <Text style={styles.titleTextStyle}>First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Nishi"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.userNameStyle}>
          <Text style={styles.titleTextStyle}>Last Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Dubey"
            placeholderTextColor="black"
          />
        </View>
      </View>

      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Email</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="n@gmail.com"
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Phone Number</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="+1 9987634445"
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.btnContainer}>
        <PrimaryButton name='Save' />
      </View>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
