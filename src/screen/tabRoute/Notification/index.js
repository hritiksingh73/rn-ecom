import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AlertNotification from '../../../components/AlertNotification';

const Notification = ({navigation}) => {
  return (
    <ScrollView style={styles.conatiner}>
      <SafeAreaView>
        <View style={styles.innerContainer}>
          <View style={styles.headerConatiner}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={25} />
            </TouchableOpacity>
            <Text style={styles.headTxt}>Notification</Text>
          </View>
        </View>
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
        <AlertNotification />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Notification;
