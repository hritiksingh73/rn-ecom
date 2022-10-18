import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.heading} >Hello World</Text>
      <Icon name="search1" size={30} color="#900" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  heading: {

  }
})

export default App