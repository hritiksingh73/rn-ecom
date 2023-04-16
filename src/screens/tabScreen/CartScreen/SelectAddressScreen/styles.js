import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIconStyle: {
    marginLeft: 10,
  },
  headingText: {
    marginLeft: 140,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  addressStyle: {
    borderWidth: 2,
    borderColor: color.grey,
    width: 300,
    padding: 15,
    margin: 5,
    marginLeft: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    margin: 5,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 10,
    margin: 5,
  },
  deliverBtnStyle: {
    backgroundColor: color.primary,
    width: '48%',
    height: 45,
    marginLeft: 10,
    margin: 15,
    padding: 2,
  },
  btnStyle: {
    width: '48%',
    height: 50,
    borderColor: color.lightgrey,
    marginLeft: 120,
    padding: 4,
    margin: 10,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  saveBtnStyle: {
    backgroundColor: color.primary,
    width: '30%',
    height: 45,
    marginLeft: 140,
    margin: 10,
    padding: 2,
  },
});
export default styles;
