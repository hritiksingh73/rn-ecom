import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  heart: {
    paddingLeft: '25%',
  },
  heartIcon: {
    color: color.grey,
  },
  image: {
    resizeMode: 'cover',
    width: 180,
    height: '50%',
  },
  mainHeadingStyle: {
    flexDirection: 'row',
    bottom: 20,
  },
  arrowIconStyle: {
    paddingLeft: '45%',
  },
  buttonText: {
    borderWidth: 1,
    borderColor: color.lightgrey,
    width: 150,
    height: 45,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  fresh: {
    color: color.white,
    marginTop: 50,
    position: 'absolute',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  superFresh: {
    fontSize: 18,
    margnLeft: 50,
    margin: 10,
  },
  rating: {
    fontSize: 30,
    color: color.primary,
    marginLeft: 10,
  },
  title: {
    position: 'absolute',
    top: '50%',
    color: color.white,
    fontSize: 15,
    paddingHorizontal: 30,
    width: 350,
    fontWeight: 'bold',
  },
  vegetableImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 100,
  },
  titleText: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  freshImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainImageStyle: {
    height: 260,
    width: 390,
    flexDirection: 'row',
    marginLeft: 8,
    top: 20,
  },
  imageBoxStyle: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: color.lightgrey,
  },
  button: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  cart: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: color.grey,
    padding: 10,
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 20,
  },
  imageStyle: {
    resizeMode: 'center',
    width: '82%',
    height: '54%',
  },
  imageBrderStyle: {
    height: 200,
    width: 390,
  },
  price: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
  },
  productData: {
    width: '50%',
    height: 250,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
  },
  products: {
    fontSize: 20,
    margin: 10,
  },
  superImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendingTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});

export default styles;
