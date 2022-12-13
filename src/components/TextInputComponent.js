import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TextInputComponent = props => {
  const {placeholder, style, value, onBlur, onChangeText, autoCapitalize} = props;
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
    />
  );
};

const styles = StyleSheet.create({});
export default TextInputComponent;
