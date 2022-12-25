import {Color} from '../../constant/Color';
import {StyleSheet} from 'react-native';

styles = StyleSheet.create({
  groceryHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  userInputHeader: {
    paddingLeft: 55,
    paddingTop: '5%',
  },
  userDetails: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: 330,
    borderBottomColor: Color.green,
    borderRightColor: Color.white,
    borderLeftColor: Color.white,
    borderTopColor: Color.white,
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
    paddingTop: '20%',
  },
  errormsg: {
    color: Color.red,
    paddingLeft: '14%',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 25,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: '7%',
  },
  imagebutton: {
    width: 130,
    height: 50,
  },
  bottomSocialMedia: {
    flexDirection: 'row',
    paddingHorizontal: '13%',
    alignContent: 'space-between',
    paddingTop: '4%',
  },
  facebook: {
    width: 130,
    height: 50,
  },
  googleImage: {
    width: 130,
    height: 50,
  },
  bottomFacebook: {
    paddingRight: '8%',
  },
  bottomGoogle: {
    paddingLeft: '8%',
  },
});

export default styles;
