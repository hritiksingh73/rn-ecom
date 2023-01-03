import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const AddAddress = ({label, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={label}
        placeholder="Type something"
        onChangeText={onChangeText}
        style={styles.textInputStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textInputStyle: {
    width: '80%',
    marginHorizontal: '10%',
  },
});
export default AddAddress;
