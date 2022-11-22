import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const MyProfile = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}>

        </View>

		
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
	  width: '100%',
	  height: '100%',
    backgroundColor: 'white',
  },
  alin:{
    alignItems: 'center',
    marginVertical: 40,
  },
  imgContainer:{
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
  }

});

export default MyProfile;
