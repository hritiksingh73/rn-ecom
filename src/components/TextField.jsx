import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';

export default function TextField(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    padding: Platform.OS === 'ios' ? 20 : 10,
  },
});
