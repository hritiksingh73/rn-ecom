import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';
const styles = StyleSheet.create({
  itemText: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10,
  },
  priceTxt: {
    color: color.primary,
    marginLeft: 10,
    fontSize: 17,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  productDetailContainer: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },
  imgStyle: {
    width: '17%',
    height: '100%',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  cartButton: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numTxt: {
    textAlign: 'center',
    padding: 10,
  },
  cartBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent: 'flex-end',
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 8,
  },
});
export default styles;
