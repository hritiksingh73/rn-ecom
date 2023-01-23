import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: color.primary,
    height: 40,
    width: '32%',
    alignItems: 'center',
    padding: 10,
  },
  btnTextStyle: {
    color: color.white,
    fontSize: 15,
  },
});
export default styles;
