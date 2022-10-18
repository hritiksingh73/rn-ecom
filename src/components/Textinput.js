import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Textinput = props => {
  return (
    <TextInput
      style={styles.design}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.value}
      editable={props.editable}
      defaultValue={props.defaultValue}
    />
  );
};

const styles = StyleSheet.create({
  design: {
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '85%',
    bottom: '20%',
    padding: '2%',
    margin: '3%',
  },
});

export default Textinput;
