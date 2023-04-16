import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headingText: {
    marginLeft: 120,
    fontSize: 18,
    margin: 10,
    fontWeight: '500',
  },
  leftIconStyle: {
    marginLeft: 10,
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
    fontSize: 15,
    margin: 10,
  },
  mainContainerImageStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  freshImageStyle: {
    width: '10%',
    height: 35,
    borderRadius: 40,
  },
  addressStyle: {
    borderWidth: 2,
    borderColor: color.grey,
    width: 350,
    height: 100,
    padding: 15,
    margin: 5,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'green',
  },
  imageBoxStyle: {
    width: 120,
    height: 200,
    borderWidth: 1,
    borderColor: color.grey,
    margin: 5,
    backgroundColor: 'white',
    marginHorizontal: 6,
    margin: 17,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 5,
  },
  orderIdStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  headingTextStyle: {
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: '500',
  },
  priceText: {
    marginVertical: 8,
    fontWeight: '500',
    color: color.primary,
  },
  itemLengthStyle: {
    justifyContent: 'space-between',
    marginTop:12,
    marginHorizontal:'40%'
  },
  quantity: {
    marginTop: 5,
    fontWeight: '500',
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
  }
});

export default styles;
