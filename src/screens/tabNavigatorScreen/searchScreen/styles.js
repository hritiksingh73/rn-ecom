import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    HorizMargin: {
      marginHorizontal: '2%',
    },
    bgColor: {
      backgroundColor: colors.white
    },
    txtContainer: {
      backgroundColor: '#e6e6e6',
      padding: 15,
      marginVertical: 20,
      marginHorizontal: '4%',
      flexDirection: 'row',	
    },
    txtFields: {
      fontSize: 18,
      paddingLeft: 10,
    },
    itemOuterContainer: {
      width: '46%',
      height: 200,
      borderWidth: 1,
      borderColor: colors.lightgray,
      borderRadius: 3,
      margin: '2%',
    },
    itemContainer: {
      width: '100%',
      height: '70%',
      borderWidth: 1,
      borderColor: colors.lightgray,
    },
    itemTextContainer: {
      width: '100%',
      height: '30%',
    },
    itemName: {
      fontSize: 16,
      padding: 8,
      paddingBottom: 2,
    },
    itemRating: {
      color: 'green',
      fontSize: 30,
      padding: 8,
      paddingTop: 1,
    },
    itemImage: {
      width: '100%',
      height: '100%',
    },
  });

export default styles;