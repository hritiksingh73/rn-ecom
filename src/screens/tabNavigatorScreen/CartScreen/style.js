import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    constainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    horizontlmrgn: {
      marginHorizontal: 12,
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '600',
    },
    itemHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'lightgray',
    },
    headerTxt: {
      fontSize: 16,
      fontWeight: '500',
      marginHorizontal: 5,
      paddingVertical: 20,
      // borderWidth: 1
    },
    imgStyl: {
      width: 40,
      height: 40,
      // borderWidth: 1,
      margin: 10,
      borderRadius: 20,
    },
    cartItemContainer: {
      flexDirection: 'row',
      marginVertical: 12,
    },
    imgCntnr: {
      padding: 5,
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    itemImg: {
      width: 60,
      height: 60,
    },
    itemTitleArea: {
      flex: 2,
      flexDirection: 'column',
      marginHorizontal: 10,
      // marginVertical: 10,
      // borderWidth: 1,
    },
    itemTitle: {
      flex: 1,
      // borderWidth: 1,
      fontSize: 16,
      paddingTop: 10,
    },
    itemMrp: {
      flex: 1,
      // borderWidth: 1,
      fontSize: 16,
      paddingBottom: 5,
      color: 'green',
    },
    countingCntnr: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'lightgray',
      width: 110,
      height: 35,
      marginRight: 5,
      marginTop: 20,
    },
    num: {
      width: 50,
      fontSize: 16,
      // borderWidth: 1,
      // borderColor: 'lightgray',
      textAlign: 'center',
      paddingTop: 6,
    },
    inc: {
      width: 30,
      color: 'white',
      // borderWidth: 1,
      // borderLeftWidth: 1,
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 3,
      // justifyContent: 'center'
    },
    dec: {
      width: 30,
      // borderWidth: 1,
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 3,
    },
    counterBorder: {
      borderRightWidth: 1,
      borderColor: 'lightgray',
    },
    incrementBtnStyle: {
      backgroundColor: '#70c03b',
      borderLeftWidth: 1,
      borderColor: 'lightgray',
    },
    borderBotm: {
      borderBottomWidth: 1,
      borderColor: 'lightgray',
    },
    couponBlock: {
      backgroundColor: '#e6e6e6',
      marginVertical: 12,
      paddingHorizontal: 20,
    },
    couponInnerBlock: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 18,
      borderBottomWidth: 1,
      borderBottomColor: '#b3b3b3',
      padding: 10,
      paddingBottom: 16,
      paddingLeft: 0,
    },
    flxdir: {
      flexDirection: 'row',
    },
    couponIconStyl: {
      paddingHorizontal: 10,
      paddingTop: 1,
    },
    couponTxt: {
      fontSize: 18,
    },
    applyBtn: {
      fontSize: 18,
      textAlign: 'right',
      color: '#70c03b',
      fontWeight: '600',
    },
  });
  
  export default styles;