import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AlertNotification = () => {
  const highlightText = string =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlightText}>{word} </Text>
      </Text>
    ));

  return (
    <View style={styles.notifyContain}>
      <Text style={styles.notifyMessage}>
        Your order {highlightText('#IB136928')} has been shipped!
      </Text>
      <Text style={styles.notifyDate}>30 min ago</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  notifyContain: {
    marginTop: '2%',
    borderBottomColor: 'rgb(234,234,234)',
    borderBottomWidth: 1,
    paddingBottom: '3%',
    width: '100%',
  },
  notifyMessage: {
    paddingVertical: '2%',
    marginLeft: '10%',
  },
  notifyDate: {
    marginLeft: '10%',
    color: 'grey',
  },
  highlightText: {
    fontWeight: 'bold',
  },
});
export default AlertNotification;
