import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageSize: {
    width: '90%',
    height: '85%',
  },
  imageBlock: {
    alignItems: 'center',
    width: '100%',
    height: 280,
    marginLeft: 10,
  },
  imageBox: {
    width: '80%',
    height: '28%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 80,
    //margin:10
  },
  imageBoxSize: {
    width: '20%',
    height: '50%',
    borderWidth: 1,
    borderColor: color.lightgrey,
    margin: 5,
  },
  textStyle: {
    fontSize: 20,
    marginRight: 320,
    color: 'black',
  },
  priceStyle: {
    fontSize: 16,
    marginRight: 300,
    color: 'green',
    margin: 2,
  },
  dataText: {
    margin: 10,
    fontSize: 16,
  },
  headingText: {
    margin: 30,
    marginLeft: 10,
  },
  relatedStyle: {
    marginLeft: 20,
    bottom: 17,
  },
  headingStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  data: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: color.lightgrey,
    marginBottom: 120,
  },
  titleText: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  image: {
    resizeMode: 'cover',
    width: 180,
    height: '50%',
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
  price: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    bottom: 120,
  },
  bottomBtn: {
    flex: 1,
    top: 20,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    top: 20,
    color: color.white,
    fontWeight: '400',
  },
  leftIconStyle: {
    paddingTop: 50,
  },
});

export default styles;
