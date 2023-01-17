import {StyleSheet} from 'react-native';
import {color} from '../../../constant/color';

export const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
  },
  firstName: {
    width: '36%',
    marginHorizontal: 30,
  },
  lastName: {
    width: '38%',
    marginHorizontal: 10,
  },
  btnContainer: {
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: '4%',
  },
  avatarBottomTxt: {
    fontSize: 16,
    color: color.primary,
    marginVertical: '5%',
  },
});
