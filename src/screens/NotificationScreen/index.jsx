import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ListItem from '../../components/ListItem';
import {globalStyle} from '../../constant/globalStyle';
import NOTIFICATION from '../../data/notification';
import {styles} from './styles';

const renderNotifications = ({item}) => {
  return (
    <View style={styles.renderItemContainer}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={() => goBack()} />
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <ListItem
        data={NOTIFICATION}
        renderItem={renderNotifications}
        ItemSeparatorComponent={() => <View style={styles.itemDivider}></View>}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;
