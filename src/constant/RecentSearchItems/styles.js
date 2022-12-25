import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../Color';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    width: '101%',
    height: '4%',
    marginTop: 20,
    paddingLeft: 50,
  },
  text: {
    borderRadius: 20,
    right: '100%',
    width: 110,
    height: 40,
    backgroundColor: Color.liteGrey,
    color: Color.black,
    textAlign: 'center',
    alignItems: 'center',
    padding: '3%',
  },
});

export default styles;
