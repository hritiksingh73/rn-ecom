import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const MyAccFields = props => {
    const {icon, txt} = props;
  return (
    <>
        <View style={styles.flexDirForRow}>
          <Feather name={icon} size={25} color={'#404040'} />
          <Text style={styles.txtArea}>{txt}</Text>
        </View>

      <View style={styles.itemSepertor} />
    </>
  );
};

export default MyAccFields;
