import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  flatlistData: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: color.lightgrey,
  },
  button: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    margin: 10,
  },
  dollar: {
    fontSize: 15,
    marginLeft: 10,
    color: color.primary,
  },
  flatlistData: {
    resizeMode: 'center',
    width: 200,
    height: '50%',
  },
  cart: {
    margin: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: color.grey,
    padding: 10,
  },
  data: {
    width: 220,
    height: 250,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
  },
  main: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.lightgrey,
    margin: 8,
  },
  item: {
    flexDirection: 'row',
  },
  sort: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filter: {
    flexDirection: 'row',
  },
  sortItem: {
    margin: 20,
    fontSize: 15,
    flexDirection: 'row',
  },
  filterItem: {
    margin: 20,
    fontSize: 15,
  },
  size: {
    margin: 15,
  },
});

export default styles;
