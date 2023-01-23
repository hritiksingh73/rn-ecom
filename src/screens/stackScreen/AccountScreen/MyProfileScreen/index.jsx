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
import firestore from '@react-native-firebase/firestore';

const MyProfileScreen = ({navigation}) => {
  const data = useSelector(state => state.userData.userRecord);
  console.log('fire-->', data);
  const userID = useSelector(state => state.userData.userID);

  const [userInfo, setUserInfo] = useState('');
  console.log('userInfo--->', userInfo);

  //const btnHandlerFirestore = () => {
  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(data.email)
     // .doc('uDetE56Db1XcSlZJ7RCuJU8kGOn2')
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          let data = documentSnapshot.data();
          setUserInfo(data);
        }
      });
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <AntDesign name="left" size={20} onPress={() => goBack()} />
        <Text style={styles.headingText}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
          <Feather name="edit" size={20} style={styles.editStyle} />
        </TouchableOpacity>
      </View>
      <Avatar.Image
        size={94}
        style={styles.avatarStyle}
        //   source={require('../assets/avatar.png')}
      />
      <View style={styles.headingTextStyle}>
        <Text style={styles.nameStyle}>Nishi Dubey</Text>
      </View>
      <View style={styles.mainTextStyle}></View>
      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Email</Text>
        <Text style={styles.textInputStyle}>{userInfo.email}</Text>
      </View>
      <View style={styles.userInfoStyle}>
        <Text style={styles.titleTextStyle}>Phone Number</Text>
        <Text style={styles.textInputStyle}>{userInfo.mobile}</Text>
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Change Password"
          color="white"
          //onPress={btnHandlerFirestore}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyProfileScreen;
