import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const HomeBtn = ({name, LoginHandler, isValidate}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.loginTxtArea}
        // onPress={()=>{LoginHandler()
        // onPress={()=>{isValidate()
        onPress={() => {
          name === 'Login' ? isValidate() : LoginHandler();
        }}>
        <Text style={styles.loginBtn}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: '10%',
    paddingVertical: '4%',
  },
  loginTxtArea: {
    backgroundColor: '#70c03b',
    marginVertical: '10%',
    borderRadius: 3,
  },
});

export default HomeBtn;
