import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  veggies: {
    height: 180,
    width: 200,
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  image: {
    borderWidth: 1,
    height: 130,
    width: 180,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    marginTop: 50,
    marginLeft: 20,
    width: 320,
    height: 40,
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
