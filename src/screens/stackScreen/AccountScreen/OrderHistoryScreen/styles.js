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
  headingText: {
    marginLeft: 120,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  mainOrderContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: color.grey,
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: 25,
  },
  orderIdStyle: {
    fontSize: 15,
    fontWeight: '700',
  },
  dateStyle: {
    color: 'grey',
  },
  statusStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: '4%',
  },
  rateStyle: {
    color: color.primary,
    marginTop: '3%',
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default styles;
