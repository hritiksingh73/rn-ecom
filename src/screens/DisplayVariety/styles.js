import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    paddingBottom: 20,
    paddingLeft: 10,
  },
  imageCard: {
    resizeMode: 'contain',
    width: 150,
    height: 220,
  },
  imageContainer: {
    width: 185,
    borderRadius: 10,
    // borderWidth: 1,
  },
  imageTitle: {
    fontSize: 15,
    color: '#344055',
  },
  imagerating: {
    fontSize: 15,
    color: '#344055',
  },
  searchIcon:{
    paddingTop:13
  }
});

export default styles;
