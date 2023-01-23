import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 18,
    marginHorizontal: 130,
    fontWeight: '500',
  },
  mainInputContainer: {},

  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  userMainBoxNameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    margin: 10,
    marginRight:80
  },
 userNameStyle: {
    borderBottomWidth: 1,
    borderColor: color.grey,
    width: '36%',
    padding: 10,
  },
  userInfoStyle: {
    borderBottomWidth: 1,
    borderColor: color.grey,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 14,
    margin: 10,
  },

  titleTextStyle: {
    color: color.grey,
    fontWeight: '500',
    marginBottom: 10,
  },
  textInputStyle: {
    fontSize: 17,
    fontWeight: '400',
  },

  avatarStyle: {
    backgroundColor: color.grey,
    marginHorizontal: 150,
    marginTop: 20,
  },
  nameStyle: {
    fontSize: 18,
    marginHorizontal: 140,
    color: color.primary,
  },
  headingTextStyle: {
    marginTop: 15,
  },
  btnContainer: {
    marginVertical: 30,

    alignItems: 'center',
  },
});
export default styles;
