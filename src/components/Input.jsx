import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const Input = ({ name, control, placeholder, customStyle, ...rest }) => {
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={[styles.input, customStyle]}
            error={!!error?.message}
            placeholderTextColor="black"
            textColor="gray"
          />
          {error && <HelperText type="error">{error.message}</HelperText>}
        </>
      )}
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: 'Required',
        },
      }}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 50,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 0.2,
  },
});
export default Input;
