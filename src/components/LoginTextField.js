import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const LoginTextField = ({page, placeholder, icon, FilterData, secureTxt=false}) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={20} style={styles.icons} />
      <TextInput
        style={styles.txtField}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        onChangeText={val => {
          console.log('--->', val);
          FilterData(placeholder, val, page);
        }}
        // onFocus={()=>{styles.txtBtmClr}}
        // onBlur={() => FilterData(placeholder, data, page)}
      />
      {/* <Text>{secureTxt}</Text> ? <Feather name={icon} size={20} style={styles.icons} /> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    paddingVertical: '3%',
    marginVertical: '6%',
    flexDirection: 'row',
  },
  txtField: {
    fontSize: 18,
  },
  icons: {
    marginRight: 15,
  },
  txtBtmClr: {
    borderBottomColor: 'red',
  }
});

export default LoginTextField;
