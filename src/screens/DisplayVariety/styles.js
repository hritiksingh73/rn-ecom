import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Color } from '../../constant/Color';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    width: "90%",
    backgroundColor: '#e6e6e6',
    marginVertical: 10,
    paddingHorizontal:20,
    marginHorizontal:20
  },
  txtFields: {
    fontSize: 18,
    paddingLeft: 10,
  },
  mainContainer: {
    paddingBottom: 8,
    paddingLeft: 8
  },
  imageCard: {
    resizeMode: 'contain',
    width: 150,
    height: 220,
  },
  imageContainer: {
    width: 185,
    height:280,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Color.darkGrey,
    paddingLeft:15
  },
  imageTitle: {
    fontSize: 15,
    color: Color.black,
    fontWeight:"500",
    paddingLeft:20,
  },
  rating:{
    paddingRight:70,
    
  },
  imagerating: {
    fontSize: 15,
    color: Color.black,
    fontWeight:"500",
    paddingLeft:20
  },
  searchIcon:{
    paddingTop:13
  }
});

export default styles;
