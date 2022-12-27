import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../Color';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: '10%',
    // width: '101%',
    height: '6%',
    marginVertical: 15,
    paddingLeft: 50,
  },
  text: {
    borderRadius: 20,
    right: '100%',
    width: 100,
    height: 40,
    backgroundColor: Color.liteGrey,
    color: Color.black,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent:'center',
    // flex:1,
     paddingVertical: 10,
  },
});

export default styles;
