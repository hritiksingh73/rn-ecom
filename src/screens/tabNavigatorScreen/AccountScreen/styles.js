import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
      backgroundColor: colors.white,
    },
    horizntlMrgn: {
      marginTop: 40,
    },
    itemSepertor: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: '#d8d8d8',
      marginVertical: 22,
    },
    txtArea: {
      fontSize: 16,
      color: '#1a1a1a',
      marginHorizontal: 20,
      marginTop: 5,
    },
  });

export default styles;