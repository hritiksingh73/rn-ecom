import { Color } from "../../constant/Color";
import {StyleSheet} from 'react-native';

styles = StyleSheet.create({
    groceryHeader: {
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
    userInputHeader: {
      paddingLeft: 60,
      paddingTop: 20,
    },
    userDetails: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      borderBottomWidth:1,
      width: 330,
      borderBottomColor: Color.green,
      borderRightColor: Color.white,
      borderLeftColor: Color.white,
      borderTopColor: Color.white,
      // borderBottomColor: Color.green,
    },
    forgetPassword: {
      fontSize: 20,
      color: Color.green,
      alignSelf: 'center',
      alignItems: 'center',
      paddingTop: 10,
    },
    loginButtonContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    loginButton: {
      fontSize: 20,
      color: Color.white,
      borderRadius: 3,
      width: 100,
      height: 30,
      backgroundColor: Color.green,
      textAlign: 'center',
    },
  
    bottomHeadline: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
    paddingTop:30
    },
    errormsg: {
      color: Color.red,
      paddingLeft:"14%"
    },
    orContinue: {
      width: 400,
      height: 80,
      marginBottom: 5,
    },
    imagebutton: {
      width: 130,
      height: 50,
    },
    bottomSocialMedia:{
      flexDirection:"row",
      paddingHorizontal:"13%",
      alignContent:'space-between'
    },
    facebook: {
      width: 130,
      height: 50,
    },
    googleImage: {
      width: 130,
      height: 50,
    },
    bottomFacebook:{
      paddingRight:20
    },
    bottomGoogle:{
      paddingLeft:20
    }
  });

  export default styles;