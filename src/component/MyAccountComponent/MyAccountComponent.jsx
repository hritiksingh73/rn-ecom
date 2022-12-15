import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MyAccountComponent = ({Address,onPress,...props}) => {
  return (
    <TouchableOpacity  style={styles.menuList}  onPress={onPress}  >
      <AntDesign name={props.Icon} size={30} style={styles.favourite} />
      {/*
      <Branch name={props.Branch} size={30} style={styles.favourite}/>
      <Address name={props.Address} size={30} style={styles.favourite}/> 
       */}
      <Text style={styles.mycarticonsize}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

export default MyAccountComponent;
