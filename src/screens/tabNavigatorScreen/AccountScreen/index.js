import React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Feather from 'react-native-vector-icons/Feather';

const AccountScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizntlMrgn}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'user'} size={25} color={'#404040'}/>
              <Text style={styles.txtArea}>My Profile</Text>
          </View>
        </TouchableOpacity>
      
        
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={()=>navigation.navigate('Manage Addresses')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'calendar'} size={25} color={'#404040'}/>
                <Text style={styles.txtArea}>Manage Addresses</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={()=>navigation.navigate('Order History')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'book'} size={25} color={'#404040'}/>
                <Text style={styles.txtArea}>Order History</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

        <TouchableOpacity onPress={()=>navigation.navigate('My Wishlist')}>
          <View style={{flexDirection: 'row', marginLeft: 18}}>
            <Feather name={'gift'} size={25} color={'#404040'}/>
                <Text style={styles.txtArea}>My Wishlist</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemSepertor} />

		<TouchableOpacity onPress={signOut}>
			<View style={{flexDirection: 'row', marginLeft: 18}}>
			<Feather name={'power'} size={25} color={'#404040'}/>
			<Text style={styles.txtArea}>Logout</Text>
			</View>
		</TouchableOpacity>
		<View style={styles.itemSepertor} />
		
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
  horizntlMrgn: {
    marginTop: 40,
  },
  itemSepertor: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    marginVertical: 22,
  },
  txtArea: {
	fontSize: 16,
	color: '#1a1a1a',
	marginHorizontal: 20,
	marginTop: 5,
  },
});

export default AccountScreen;
