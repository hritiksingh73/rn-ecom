import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import color from '../constant/color';

export default function ButtonComponent(props) {
  const {disabled, onPress} = props;

  return (
    <View style={styles.loginButtonContainer}>
      <TouchableOpacity
        style={styles.loginButton}
        disabled={disabled}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text {...props} style={styles.loginButtonStyle} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButtonContainer: {
    alignItems: 'center',
    paddingTop: 35,
  },
  loginButton: {
    width: 90,
    height: 45,
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  loginButtonStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
