import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: colors.lightgray,
      paddingVertical: '3%',
      marginTop: '6%',
      marginBottom: 4,
      flexDirection: 'row',
      width: '100%',
    },
    txtField: {
      fontSize: 18,
      width: '78%',
    },
    icons: {
      width: '6%',
      marginRight: '4%',
      marginLeft: '1%',
    },
    rightIconsArea: {
      width: '6%',
      marginRight: '1%',
      marginLeft: '4%',
    },
    rightIcons: {
      width: '100%',
    },
    warningTxt: {
      color: colors.red,
    }
  });

export default styles;
