import {StyleSheet} from 'react-native';
import {color} from './color';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceTxt: {
    color: color.primary,
  },
  productDetailContainer: {
    margin: 10,
  },
  itemDirection: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: color.secondry,
    margin: 8,
  },
  productList: {
    marginHorizontal: '4%',
  },
});
