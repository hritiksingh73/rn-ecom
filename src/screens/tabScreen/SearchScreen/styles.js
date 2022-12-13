import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    alignItems: 'center',
    marginLeft: 150,
    fontSize: 20,
  },
  placeholder: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  button: {
    margin: 10,
  },
  data: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 300,
  },
  dollar: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10,
  },
  flatlistData: {
    marginTop: 30,
    height: 150,
    width: 220,
  },
  recent: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginLeft: 20,
    width: 400,
    height: 50,
  },
  text: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 5,
    padding: 16,
    height: 50,
    fontSize: 14,
    width: 120,
  },
  main: {
    flexDirection: 'row',
  },
});

export default styles;
