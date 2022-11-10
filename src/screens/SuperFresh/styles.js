import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cart: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#b3ffd9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20,
  },
  imgContainer: {
    paddingHorizontal: 5,

    alignItems: 'center',
  },
  imgStyle: {
    width: '60%',
    height: 160,
  },
  card: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
  },
  mainContainer: {
    width: '100%',

    backgroundColor: '#b696d7',

    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingcontainerchild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favourite: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default styles;
