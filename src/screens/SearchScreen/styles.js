import {StyleSheet} from 'react-native';

import {Color} from '../../constant/Color';
const styles = StyleSheet.create({
  search: {
    alignItems: 'center',
    marginLeft: '35%',
    fontSize: 20,
    color: Color.black,
  },
  mainContainer: {
    paddingBottom: 8,
    paddingLeft: 20,
  },
  imageCard: {
    resizeMode: 'contain',
    width: 150,
    height: 220,
  },
  imageContainer: {
    width: 185,
    height: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.darkGrey,
    paddingLeft: 15,
  },
  imageTitle: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    paddingLeft: 20,
  },
  rating: {
    paddingRight: 70,
  },
  price: {
    color: Color.green,
    paddingLeft: 20,
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addtocart: {
    borderColor: Color.darkGrey,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: Color.liteGrey,
    marginTop: '10%',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  searchIcon: {
    paddingTop: 13,
    color:Color.black
  },
  txtFields: {
    fontSize: 18,
    paddingLeft: 10,
  },

  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },

  header: {
    flexDirection: 'row',
    paddingLeft: 20,
  },

  flatlistData: {
    marginTop: 30,
    height: 150,
    width: 220,
  },
  recent: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    color: Color.black,
  },
});

export default styles;
