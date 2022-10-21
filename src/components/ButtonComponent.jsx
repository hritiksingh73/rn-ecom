import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import color from '../constant/color';

export default function ButtonComponent(props) {
  return (
    <View style={styles.loginButton}>
      <TouchableOpacity
        style={styles.loginButtonContainer}
        disabled={props.disabled}
        activeOpacity={0.8}
        onPress={props.onPress}>
        <Text {...props} style={styles.loginButtonStyle} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    paddingTop: 35,
  },
  loginButtonContainer: {
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
