import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  btnStyle:{
    backgroundColor:color.primary,
    height:40,
    width:'30%',
    alignItems:'center',
    padding:10
  },
  btnTextStyle:{
    color: color.white,
    fontSize: 14,
    width:'40%'
    // textAlign: 'center',
    // fontWeight: '500',
    // paddingHorizontal: 35,
    // paddingVertical: 14,
  }
});
export default styles;