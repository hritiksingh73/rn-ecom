import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingLeft: 15,
  },

  relatedItemContainer: {
    marginBottom: 500,
  },
  card: {
    width: 200,
    backgroundColor: Color.white,
    borderRadius: 5,
    borderColor: Color.darkGrey,
    borderWidth: 1,
    height: 320,
  },
  imgStyle: {
    width: '60%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontWeight: '400',
    paddingLeft: 20,
    color: Color.black,
  },
  relatedItemprice: {
    color: Color.green,
    paddingLeft: 20,
  },
  rating: {
    paddingRight: 100,
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addtocart: {
    borderColor: Color.darkGrey,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },
  cardImage: {
    height: '100%',
    resizeMode: 'center',
    alignItems: 'center',
    width: '100%',
  },

  imageSize: {
    width: '90%',
    height: '85%',
  },
  headerBlock: {
    height: '35%',
  },
  itemName: {
    fontSize: 20,
    color: Color.black,
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: Color.green,
  },

  itemDescription: {
    fontSize: 16,
    paddingTop: 20,
  },
  itemDescriptionContainer: {
    marginTop: '20%',
  },

  footerheading: {
    fontWeight: '600',
    fontSize: 16,
    color: Color.black,
    marginVertical: 30,
  },

  buttonStyle: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  footerButtonLeft: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#161e1b',
  },
  footerButtonRight: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    backgroundColor: Color.green,
  },
  btnText: {
    fontSize: 15,
    color: Color.white,
    fontWeight: '400',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
});

export default styles;
