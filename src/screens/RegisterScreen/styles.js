import {StyleSheet} from 'react-native';
import { Color } from '../../constant/Color';

const styles = StyleSheet.create({
  contaienr: {
    paddingTop: 10,
    backgroundColor: Color.white
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 350,
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
    
    paddingTop: 40,
    borderWidth:1,
    borderBottomColor:Color.darkGrey
  },
  bottomHeadline: {
    paddingTop: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  registerButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  registerButton: {
    fontSize: 25,
    color: Color.green,
    height: 40,
    borderRadius: 10,
    width: 100,
    textAlign: 'center',
  },
  errormsg: {
    color: Color.red,
    paddingLeft:"13%"
  },
  loginButton: {
    color: Color.green
  },
});


export default styles;