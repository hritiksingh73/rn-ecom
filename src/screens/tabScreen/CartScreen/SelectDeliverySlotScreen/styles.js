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
  },
  leftIconStyle: {
    marginLeft: 10,
  },
  headingText: {
    marginLeft: 140,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  timeStyle: {
    marginLeft: 10,
    fontSize: 15,
  },
  dateContainer: {
    height: 60,
    marginHorizontal: 6,
    margin: 10,
    top: 18,
  },
  deliveryDateStyle: {
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 18,
    borderColor: color.grey,
  },
  timeStyle: {
    fontSize: 15,
    marginRight: 100,
  },
  priceStyle: {
    fontSize: 15,
  },
  deliveryTimeSlotContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: color.grey,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  dayStyle: {
    fontSize: 18,
    fontWeight: '500',
    bottom: 15,
  },
  dateStyle: {
    color: 'grey',
    bottom: 8,
  },
  deliveryTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 50,
  },
  btnText: {
    color: color.lightgrey,
    borderColor: color.lightgrey,
    borderWidth: 1,
    height: 40,
    marginTop: 5,
  },
  headingStyle: {
    fontSize: 20,
    margin: 10,
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: color.primary,
    width: '30%',
    height: 45,
    marginLeft: 140,
    margin: 10,
    padding: 2,
  },
});

export default styles;
