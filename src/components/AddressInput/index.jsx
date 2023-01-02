import React from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './styles.js';

const AddressInput = ({...props}) => {
  return (
    <View style={styles.textInputStyle}>
      <TextInput {...props} 
      style={styles.placeholderStyle} />
    </View>
  );
};

export default AddressInput;
