import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headingText: {
    marginLeft: 130,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  orderText: {
    fontSize: 20,
    fontWeight: '300',
    marginHorizontal: 75,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 100,
    marginLeft: 80,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    backgroundColor: color.primary,
  },
  handStyle: {
    marginHorizontal: 50,
  },
  orderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 18,
  },
  orderTextStyle: {
    marginHorizontal: '20%',
  },
});

export default styles;
