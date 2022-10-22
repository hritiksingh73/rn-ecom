import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Color} from '../constant/Color';

const FormContainer = (props) => {
  const {placeholder, autoCapitalize, onChangeText, onBlur, value} = props;
  return (
    <View style={styles.userDetails}>
      <TextInput
      {...props}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
  },
});

export default FormContainer;
