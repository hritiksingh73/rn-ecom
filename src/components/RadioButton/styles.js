import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  mainCardStyle: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: color.lightgrey,
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  paymentStyle: {
    paddingTop: 5,
    fontSize: 14,
  },
});
export default styles;
