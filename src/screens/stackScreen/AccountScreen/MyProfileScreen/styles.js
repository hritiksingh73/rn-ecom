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
    fontWeight: '500',
  },
  editStyle: {
    marginHorizontal: 10,
  },
  avatarStyle: {
    backgroundColor: color.grey,
    marginHorizontal: 150,
    marginTop: 20,
  },
  nameStyle: {
    fontSize: 20,
    marginHorizontal: 130,
  },
  headingTextStyle: {
    marginTop: 15,
  },
  mainTextStyle: {
    borderBottomWidth: 1,
    borderColor: color.grey,
    margin: 10,
    padding: 8,
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
    fontSize: 15,
    fontWeight: '400',
  },

  btnStyle: {
    backgroundColor: color.primary,
    width: '50%',
    marginHorizontal: 80,
    margin: 10,
  },
  inputStyle: {
    margin: 10,
    borderWidth: 1,
    width: '80%',
  },
  placeholderStyle: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginVertical: 18,
  },
});
export default styles;
