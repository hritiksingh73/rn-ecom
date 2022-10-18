import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function ImageBtn() {
  return (
    <TouchableOpacity style={styles.continueButton}>
      <Image
        style={styles.btnImage}
        source={require('../assets/facebook.jpeg')}
      />
      <Image
        style={styles.btnImage}
        source={require('../assets/google1.jpeg')}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  continueButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    paddingTop: 35,
  },
  btnImage: {
    width: '30%',
    height: 45,
  },
});
