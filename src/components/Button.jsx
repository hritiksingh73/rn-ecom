import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { DefaultNavigationTheme } from '../theme/navigation';

const Button = ({ title, onPress, customStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, customStyle]}>
      <Text style={styles.btnTitle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultNavigationTheme.colors.primary,
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: 'white',
    fontSize: 15,
  },
});
export default Button;
