import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';
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
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  imgStyle: {
    width: '60%',
    height: 160,
    marginLeft: '15%',
    resizeMode: 'contain',
  },
  card: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#bfbfbf',
    borderWidth: 1,
    height: 310,
    marginLeft:10,
    marginRight:-10,
    borderRightWidth:0.0
  },
  itemTitle: {
    fontWeight: '400',
    paddingLeft: 20,
    color: '#1d1e20',
  },
  price: {
    color: Color.green,
    paddingLeft: 20,
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
  cardImage: {
    height: 190,
    width: 350,
    resizeMode: 'center',
  },
  selectionCard: {
    height: 190,
    paddingRight: 10,
    marginVertical: 20,
    flexDirection: 'row',
  },
  imageTitle: {
    color: 'white',

    top: '30%',
    position: 'absolute',
    fontSize: 30,
    left: '30%',
    fontWeight: '800',
  },
  imagedescription: {
    position: 'absolute',
    top: '50%',
    color: 'white',
    paddingHorizontal: 30,
    width: 350,
    fontWeight: '400',
  },
  viewMore: {
    fontSize: 20,
    paddingLeft: 20,
    paddingLeft: '25%',
  },
  addtocart: {
    borderColor: '#bfbfbf',
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 20,
  },
  headertitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3d4442',
  },
  secondheader: {
    fontSize: 18,
    color: '#3d4442',
    fontWeight: '600',
  },
  poppularproducts: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: '700',
    color: Color.black,
  },
  popularproductcontainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
});

export default styles;
