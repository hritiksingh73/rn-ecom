import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function ErrorMessage(props) {
  return <Text style={styles.txtStyle} {...props} />;
}
const styles = StyleSheet.create({
  txtStyle: {
    color: 'red',
    marginLeft: 25,
  },
});
