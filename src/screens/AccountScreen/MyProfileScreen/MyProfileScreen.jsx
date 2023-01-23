import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import Edit from 'react-native-vector-icons/Feather';
import FormContainer from '../../../component/FormComponent/Login_RegisterFormComponent/FormInput';

const MyProfileScreen = () => {
  const navigation = useNavigation();
  const registrationData = useSelector(state => state.userInfo.loginpage);
  const [userInfo, setUserInfo] = useState('');
  console.log('userInfo====>>>>', userInfo);

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(registrationData.name) //uid!!!
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          setUserInfo(data);
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
        <Edit name="edit" size={24} style={styles.Icons} />
      </View>
      <View style={styles.avator}>
        <Avatar.Text size={150} label={userInfo.name} />
      </View>

      <Text style={styles.userName}>{userInfo.name}</Text>

      <Divider style={styles.divider} />

      <View style={styles.userDataContainer}>
        <FormContainer value={userInfo.name} style={styles.userData} />
        <FormContainer value={userInfo.Phone} style={styles.userData} />
      </View>
      <View style={styles.changePasswordButtonContainer}>
        <TouchableOpacity>
          <Text style={styles.changePasswordButton}>change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyProfileScreen;
