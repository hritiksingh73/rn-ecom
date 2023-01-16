import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headingText: {
    marginLeft: 120,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  mainOrderContainer: {
    width: '100%',
    borderColor: color.grey,
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: 25,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headingStyle: {
    marginHorizontal: 10,
    fontSize: 20,
    padding: 10,
  },
  superFreshTextStyle: {
    fontSize: 18,

    margin: 10,
  },
  mainContainerImageStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  freshImageStyle: {
    width: '13%',
    height: 45,
    borderRadius: 40,
  },
  addressStyle: {
    borderWidth: 2,
    borderColor: color.grey,
    width: 300,
    height: 120,
    padding: 15,
    margin: 5,
    marginLeft: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    margin: 5,
    marginLeft: 10,
  },
  addressTextStyle: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 10,
    margin: 5,
  },
  orderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 18,
  },
});

export default styles;
