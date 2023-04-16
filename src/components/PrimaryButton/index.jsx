import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const PrimaryButton = props => {
  const {name, onPress} = props;
  return (
    <View style={styles.btnStyle}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.btnTextStyle}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
