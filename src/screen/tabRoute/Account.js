import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import IconAntDesign from 'react-native-vector-icons/Ionicons';

const Account = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <IconAntDesign name={'ios-menu-outline'} size={35} />
          <Text style={{fontSize: 20, fontWeight: '600'}}>My Account</Text>
          <IconAntDesign name={'notifications-outline'} size={35} />
        </View>
      </View>
      {/* <Button title="signOut" onPress={signOut} /> */}
      <View style={styles.arrange}>
        <TouchableOpacity style={styles.sequence}>
          <IconAntDesign
            name={'notifications-outline'}
            size={25}
            style={{left: -20}}
          />
          <Text>My profile</Text>
        </TouchableOpacity>
        <View style={{marginTop:50,right:90}}>
        <TouchableOpacity style={styles.sequence}>
          <IconAntDesign
            name={'notifications-outline'}
            size={25}
            style={{left: -20}}
          />
          <Text>My profile</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:100,right:180}}>
        <TouchableOpacity style={styles.sequence}>
          <IconAntDesign
            name={'notifications-outline'}
            size={25}
            style={{left: -20}}
          />
          <Text>My profile</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrange: {
    flex: 1,
    flexDirection: 'row',
  },
  sequence: {
    flexDirection: 'row',
    //marginRight:200,
    top:-250,
    right:20,
     
    borderBottomWidth:3
 
    
   
  
  },
});

export default Account;
