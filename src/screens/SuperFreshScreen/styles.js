import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  heart: {
    marginLeft: 100,
  },
  image: {
    width: 200,
    height: 220,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  fresh: {
    color: 'white',
    marginTop: 50,
    position: 'absolute',
    fontSize: 35,
    marginLeft: 100,
  },
  superFresh: {
    fontSize: 18,
    margnLeft: 50,
    margin: 10,
  },
  title: {
    position: 'absolute',
    marginTop: 50,
    color: 'white',
    justifyContent: 'space-around',
    alignitems: 'center',
  },
  vegetableImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
 freshImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cart: {
    textAlign: 'center',
    margin: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  item: {
    height: 250,
    width: 310,
    marginVertical: 20,
    flexDirection: 'row',
  },
  data: {
    width: 200,
    height: '100%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  popular: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 25,
    marginLeft: 20,
  },
  flatlist: {
    height: 200,
    width: 300,
    resizeMode: 'center',
  },
  dollar: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10,
  },
  products: {
    fontSize: 20,
    margin: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    margin: 10,
  },
  superImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
