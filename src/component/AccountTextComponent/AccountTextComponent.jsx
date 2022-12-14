import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Address from 'react-native-vector-icons/Foundation';
import Branch from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const AccountTextComponent = ({...props}) => {
  //     const signOut = () => {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };
  // const {Icon, Address, Branch} = props;
  return (
    <TouchableOpacity
      style={styles.menuList} /*onPress={() => props.onPress(signOut())}*/
    >
      <Icon name={props.Icon} size={30} style={styles.favourite} />
      {/* 
      <Branch name={props.Branch} size={30} style={styles.favourite}/>
      <Address name={props.Address} size={30} style={styles.favourite}/> 
      */}
      <Text style={styles.mycarticonsize}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

export default AccountTextComponent;
