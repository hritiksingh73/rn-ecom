import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
  },
  menuStyle:{
    marginLeft:10
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 15,
  },
  accountContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  iconStyle: {
    margin: 10,
  },
  txtStyle: {
    fontSize: 16,
  },
});

export default styles;
