import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cart: {
    fontSize: 20,
    marginLeft: 200,
  },
  mainMargin: {
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
  },
  vegetableImage: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  superImage: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 5,
    paddingVertical: 20,
  },
  delete: {
    color: 'white',
  },
  itemDivide: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 8,
  },
  counting: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: 100,
    height: 40,
    marginLeft: 280,
  },
  increase: {
    backgroundColor: 'green',
    borderLeftWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  plus: {
    width: 30,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  minus: {
    width: 30,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  number: {
    width: 50,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
  },
  itemDetail: {
    width: '60%',
    padding: 20,
  },
  remove: {
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: 'green',
    borderLeftWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '400',
    bottom: 5,
    marginRight: 1,
  },
  dollarText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'green',
  },
  freshImage: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 20,
  },
  mainList: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: 'rgb(216,216,216)',
  },
  itemStyle: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  fruitImage: {
    width: 40,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10,
    resizeMode: 'center',
  },
  coupon: {
    backgroundColor: 'white',
    marginVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  couponBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    paddingBottom: 16,
    paddingLeft: 0,
  },
  couponInput: {
    marginLeft: 10,
  },
  apply: {
    color: 'green',
    padding: 30,
    marginLeft: 150,
    fontSize: 15,
    fontWeight: 'bold',
  },
  total: {
    backgroundColor: 'rgb(20,30,27)',
    flexDirection: 'row',
    height: 200,
    width: 500,
  },
  totalBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    padding: 10,
    marginBottom: 90,
  },
  totalInput: {
    fontSize: 20,
  },
  checkout: {
    color: 'white',
    marginTop: 20,
    backgroundColor: 'rgb(89,193,80)',
    padding: 20,
    marginLeft: 180,
    fontSize: 25,
    fontWeight: 'bold',
    height: 70,
    width: 160,
    borderWidth: 1,
  },
  billing: {
    marginLeft: 20,
  },
  billingText: {
    fontSize: 20,
  },
  billingTextStyling: {
    fontSize: 16,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  billingStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
    margin: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
