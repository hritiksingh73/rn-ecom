import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 50,
    height: 267,
  },
  imgStyle: {
    width: 210,
    height: '50%',
    margin: 5,
  },
  priceTxt: {
    color: color.primary,
  },
  txtContainer: {marginHorizontal: 20},
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  btnTxt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'lightgrey',
  },
});
