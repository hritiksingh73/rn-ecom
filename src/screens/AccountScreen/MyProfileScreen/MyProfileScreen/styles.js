import {StyleSheet} from 'react-native';
import {Color} from '../../../../constant/Color';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: Color.white,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  header: {
    fontSize: 22,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  userName: {
    fontSize: 25,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  avator: {
    alignItems: 'center',
    marginTop: '5%',
    paddingBottom: 20,
  },
  Icons: {
    paddingRight: 20,
  },
  userDataContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  divider: {
    marginTop: 10,
  },
  userData: {
    fontSize: 20,
    width: '90%',
  },
  changePasswordButtonContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  changePasswordButton: {
    width: 140,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    backgroundColor: Color.green,
    color: Color.white,
  },
});

export default styles;
