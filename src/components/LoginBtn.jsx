import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import image from '../config/image';

export default function LoginBtn() {
  return (
    <TouchableOpacity style={styles.continueButton} activeOpacity={0.9}>
      <Image style={styles.btnImage} source={image.facebook} />
      <Image style={styles.btnImage} source={image.google} />
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
