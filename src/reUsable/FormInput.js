import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';


const FormContainer = (props) => {
  const {placeholder, autoCapitalize, onChangeText, onBlur, value} = props;
  return (
    
      <TextInput
      {...props}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
   
  );
};
const styles = StyleSheet.create({});

export default FormContainer;
