import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
    },
    containerMargin: {
      marginHorizontal: '2%',
    },
    headerBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginLeft: 15,
    },
    imgBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitleBlock: {
      paddingVertical: 3
    },
    headerTitleTxt: {
      fontSize: 16, 
      fontWeight: '600'
    },
    headerRatingBlock: {
      alignItems: 'center', 
      paddingVertical: 5,
    },
    bottomArrowIcon: {
      paddingLeft: 12
    },
    heartIcon: {
      padding: 10, 
      paddingLeft: 0,
      marginTop: 5,
    },
    imgStyl: {
      width: 40,
      height: 40,
      margin: 10,
      borderRadius: 20,
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
      opacity: 1,
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
    },
    txtOnImageContainer: {
      width: '80%',
      height: '60%',
      position: 'absolute',
      // borderWidth: 1, 
      marginHorizontal: '10%',
      marginVertical: '10%',
    },
    txtOnImageHeader: {
      color: colors.white,
      fontWeight: '700',
      fontSize: 40,
      textAlign: 'center',
      paddingVertical: 10,
    },
    txtOnImageContent: {
      color: colors.white,
      fontWeight: '600',
      textAlign: 'center',
      paddingVertical: 10,
    },
  });

export default styles;