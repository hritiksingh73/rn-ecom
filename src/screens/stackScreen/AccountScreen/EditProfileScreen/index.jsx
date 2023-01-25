import React, {useState, useEffect} from 'react';
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
import firestore from '@react-native-firebase/firestore';

const EditProfileScreen = ({navigation}) => {
  const data = useSelector(state => state.userData.userRecord);
  console.log('data from edit profile screen-->', data);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('')

  // useEffect(() => {

  // const editBtnHandler = () => {
  //   firestore()
  //   .collection('Users')
  //   .doc(data.uid)
  //   .update({

  //     'data.fullname': 'dubey'
  //   })
  //   .then(() => {
  //     console.log('User updated!');
  //   });
  // },
  //   []);
  const updateBtnHandler = () => {
    firestore()
      .collection('Users')
      .doc(data.uid)
      .update({
        firstname: firstname,
        lastname: lastname,
        email: email,
        mobile: mobileno
      })
      .then(() => {
        console.log('User updated!', firstname);
      });
  };

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
            placeholderTextColor="grey"
            onChangeText={text => setFirstName(text)}
            value={firstname}
            label="First Name"
          />
        </View>

        <View style={styles.userNameStyle}>
          <Text style={styles.titleTextStyle}>Last Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Dubey"
            placeholderTextColor="grey"
            onChangeText={text => setLastName(text)}
            value={lastname}
            label="Last Name"
          />
        </View>
      </View>

      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Email</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="n@gmail.com"
          placeholderTextColor="grey"
          onChangeText={text => setEmail(text)}
            value={email}
            label="Email"
        />
      </View>

      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Phone Number</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="+1 9987634445"
          placeholderTextColor="grey"
          onChangeText={text => setMobileNo(text)}
            value={mobileno}
            label="Mobile No"
        />
      </View>

      <View style={styles.btnContainer}>
        <PrimaryButton name="Save" onPress={updateBtnHandler} />
      </View>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
