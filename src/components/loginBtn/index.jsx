import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LoginBtn = props => {
  const {name, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginTxtArea} onPress={onPress}>
        <Text style={styles.loginBtn}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginBtn;
