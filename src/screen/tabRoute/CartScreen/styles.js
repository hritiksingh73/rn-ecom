import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,

    backgroundColor: 'white',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  headImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headTxt: {
    fontSize: 15,
    marginHorizontal: 80,
    bottom: 60,
    fontWeight: '600',
  },
  flatcontainer: {
    width: '95%',
    height: 100,
    backgroundColor: 'white',
    alignSelf: 'center',

    flexDirection: 'row',

    borderBottomWidth: 1,
    alignItems: 'center',
  },
  imgcontain: {
    width: '20%',
    height: '45%',
    borderWidth: 1,
    marginHorizontal: 20,
  },
  productName: {
    fontSize: 15,
    fontWeight: '400',
    bottom: 5,
    right: 15,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',

    top: 20,
    right: 10,
    color: 'green',
  },
  incBtn: {
    backgroundColor: 'white',

    height: 30,
    justifyContent: 'center',

    paddingLeft: 10,
    paddingRight: 10,
    left: 20,
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 10,
  },
  incTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  num: {
    left: 20,

    fontSize: 20,
    fontWeight: 'bold',
  },
  mathcontain: {
    flexDirection: 'row',
  },
});
