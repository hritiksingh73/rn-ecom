import {StyleSheet} from 'react-native';
import {color} from '../../constant/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  imgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carouselImgStyle: {
    height: '69%',
    margin: 5,
  },
  renderItem: {
    marginTop: 25,
  },
  productsTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 45,
    marginLeft: 20,
    marginTop: '30%',
  },
  priceTxt: {
    color: color.primary,
  },
  txtContainer: {marginHorizontal: 20},
  btnContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  productDetailContainer: {
    width: 200,
    margin: 10,
  },
  productScreen: {
    borderWidth: 1,
    borderColor: 'lightgrey',
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
    marginBottom: 15,
  },
});
