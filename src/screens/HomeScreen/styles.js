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
    marginLeft: '15%',
  },
  card: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
  },
  mainContainer: {
    width: '100%',
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
  cardImage: {
    height: 200,
    width: 380,
    resizeMode: 'center',
  },
  selectionCard: {
    height: 250,
    width: 380,
    marginVertical: 10,
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
    // alignitems: "center",
    left: '30%',
  },
  imagedescription: {
    position: 'absolute',
    top: '50%',
    color: 'white',
    justifyContent: 'space-around',
    alignitems: 'center',
  },
  viewMore: {
    fontSize: 20,
    paddingLeft: 20,
    paddingLeft: '25%',
  },
  addtocart: {
    color: 'black',
  },
  headertitle: {
    fontSize: 25
  },
  secondheader:{
    fontSize: 18
  },
  poppularproducts:{
    fontSize: 20, 
    paddingLeft: 20
  },
  popularproductcontainer:{
    flexDirection: 'row'
  }

});

export default styles;
