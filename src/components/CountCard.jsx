import {Text, Button, StyleSheet, View} from 'react-native';

const CountCard = props => {
  const {count, onPress} = props;

  return (
    <View>
      <Text>Count:-{count} </Text>
      <Button title="+" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CountCard;
