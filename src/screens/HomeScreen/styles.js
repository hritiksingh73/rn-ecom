import {StyleSheet} from 'react-native';
import { Color } from '../../constant/Color';
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
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  imgStyle: {
    width: '60%',
    height: 160,
    marginLeft: '15%',
  },
  card: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
    // paddingHorizontal:10,
    marginHorizontal:10
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price:{
    color:Color.green
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
    paddingRight:10,
    // width: 380,
    marginVertical: 20,
    flexDirection: 'row',
  },
  imageTitle: {
    color: 'white',
    // textAlign: 'center',
    top: '30%',
    position: 'absolute',
    fontSize: 30,
    // display:'flex',
    // justifyContent:"space-around",
    // alignItems: "center",
    left: '30%',
    fontWeight:"800"
  },
  imagedescription: {
    position: 'absolute',
    top: '50%',
    color: 'white',
    // alignItems: 'center',
    paddingHorizontal:30,
    width:350,
    fontWeight:"400"
  },
  viewMore: {
    fontSize: 20,
    paddingLeft: 20,
    paddingLeft: '25%',
  },
  addtocart: {
    color: 'black',
    borderWidth:0.5
  },
  headertitle: {
    fontSize: 20,
    fontWeight:"700",
    color: Color.black
  },
  secondheader:{
    fontSize: 18
  },
  poppularproducts:{
    fontSize: 18, 
    paddingLeft: 20,
    fontWeight:"700",
    color:Color.black

  },
  popularproductcontainer:{
    flexDirection: 'row'
  }

});

export default styles;
