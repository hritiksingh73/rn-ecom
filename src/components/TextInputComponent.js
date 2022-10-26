import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextInputComponent = props => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.onvalue}
    />
  );
};
export default TextInputComponent;
