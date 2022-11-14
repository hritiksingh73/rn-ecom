import {StyleSheet} from 'react-native';
import color from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carouselImgStyle: {
    height: '80%',
    width: 390,
    margin: 5,
  },
  renderItem: {
    marginTop: 25,
  },
  productsTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 25,
    marginLeft: 20,
  },
  groceryImgStyle: {
    width: 210,
    height: '50%',
    margin: 5,
  },
  priceTxt: {
    color: color.primary,
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
  viewBtn: {
    backgroundColor: color.primary,
    width: '100%',
  },
  btnTxt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  productDetailContainer: {
    height: '40%',
    width: '45%',
    margin: 10,
  },
  itemDivider: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  bottomLine: {
    marginVertical: 20,
  },
  sortedItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemDirection: {
    flexDirection: 'row',
  },
});
