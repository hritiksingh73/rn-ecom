import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  itemContainer: {
    width: 190,
    height: 230,
    marginLeft: 15,
    marginRight: 1,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    margin: 5,
  },
  veggies: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EBEDEF',
    marginLeft: 15,
    width: 392,
    height: 50,
    margin: 7,
    borderWidth: 1,
    borderColor: 'silver',
  },
  mainHeader: {
    backgroundColor: color.white,
  },
  rating: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 16,
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 7,
  },
});

export default styles;
