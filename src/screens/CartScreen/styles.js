import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  superImage:{
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
    width: 110,
    height: 40,
    //marginLeft: 10,
    //marginRight: 15,
    marginTop: 20,
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
    //bottom: 5,
    marginRight: 10,
    color: 'green',
  },
  freshImage: {
    width: 40,
      height: 40,
      margin: 10,
      borderRadius: 20
  },
  mainList: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  imageStyle: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  itemStyle: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  fruitImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10,
  },
});

export default styles;
