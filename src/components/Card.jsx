import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Card = ({item, onPressHandler}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Button title="DELETE" onPress={() => onPressHandler(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: 100,
    borderRadius: 10,
    width: '100%',
  },
});
export default Card;
