import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      marginHorizontal: '2%',
    },
    heading: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      margin: 10,
    },
    productHeading: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      margin: 10,
      textAlign: 'left', 
      margin: 15
    },
    horizontalSlidebar: {
      width: 350,
      height: 200,
      marginVertical: 10,
      marginRight: 10,
    },
    itemImage: {
      width: '100%',
      height: '100%',
    },
    productList: {
      width: 200,
      height: 340,
      borderWidth: 1,
      borderColor: colors.lightgray,
      marginVertical: 10,
      marginRight: 10,
    },
    imgContainer: {
      width: '100%',
      height: '50%',
    },
    txtContainer: {
      width: '100%',
      height: '50%',
      margin: 10,
    },
    itemTitle: {
      fontSize: 18,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    addToCartBtn: {
      textAlign: 'center',
      fontSize: 15,
    },
    addToCartContainer: {
      borderWidth: 1,
      borderColor: colors.lightgray,
      marginHorizontal: 25,
      marginVertical: 10,
      padding: 15,
      borderRadius: 3,
    },
    category:{
      borderWidth: 1,
      borderColor: colors.lightgray,
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginVertical: 2,
    },
    categoryTxt: {
      fontSize: 16,
      fontWeight: '600',
    }
  });

export default styles;