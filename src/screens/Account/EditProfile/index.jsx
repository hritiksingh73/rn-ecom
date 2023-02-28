import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import styles from './styles';

const EditProfile = ({navigation}) => {
  // const Response = auth()._user;
  const [userInfo, setUserInfo] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const uid = useSelector(state => state.user.userID);

  useEffect(() => {
    firestore()
      .collection('Users')
      // .doc('ahJaeVOiPrWa0V2NpklO2IkmQTP2')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        // console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          const userData = documentSnapshot.data();
          setUserInfo(userData);
          setUserName(userData.name);
          setUserEmail(userData.email);
          setUserNumber(userData.number);
        }
      });
  }, []);

  const updateFirestoreData = () => {
    firestore().collection('Users').doc(uid).update({
      name: userName,
      email: userEmail,
      number: userNumber,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}></View>
        <TouchableOpacity>
          <Text style={styles.uploadPhoto}>Upload Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userNameBlock}>
        <View style={styles.nameBoxWidth}>
          <View style={styles.userNameBox}>
            <View style={styles.emailContainer}>
              <Text style={styles.title}>First Name</Text>
              <TextInput
                style={styles.userEmailStyle}
                defaultValue={userInfo.name}
                onChangeText={val => setUserName(val)}
              />
            </View>
          </View>
        </View>
        <View style={styles.nameBoxWidth}>
          <View style={styles.userNameBox}>
            <View style={styles.emailContainer}>
              <Text style={styles.title}>Last Name</Text>
              <TextInput style={styles.userEmailStyle} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.userDetailsBox}>
        <View style={styles.emailContainer}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.userEmailStyle}
            defaultValue={userInfo.email}
            onChangeText={val => setUserEmail(val)}
          />
        </View>
      </View>

      <View style={styles.userDetailsBox}>
        <View style={styles.emailContainer}>
          <Text style={styles.title}>Phone Number</Text>
          <TextInput
            style={styles.userEmailStyle}
            defaultValue={userInfo.number}
            onChangeText={val => setUserNumber(val)}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <PrimaryButton name={'Save'} onPress={() => updateFirestoreData()} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
