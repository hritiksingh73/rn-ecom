import { StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    loginBtn: {
      textAlign: 'center',
      fontSize: 18,
      color: colors.white,
      fontWeight: '500',
      paddingHorizontal: '10%',
      paddingVertical: '4%',
    },
    loginTxtArea: {
      backgroundColor: colors.green,
      marginVertical: '10%',
      borderRadius: 3,
    },
  });

  export default styles;