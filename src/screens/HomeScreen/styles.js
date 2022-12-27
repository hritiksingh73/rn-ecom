import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  renderItemScreen: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {
    resizeMode: 'stretch',
    width: '100%',
    height: 160,
    marginTop: 15,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    backgroundColor: 'lightgrey',
  },
  input: {
    padding: 8,
  },
  shopContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  shopTitle: {
    fontSize: 15,
    margin: 7,
  },
  ratingContainer: {
    flexDirection: 'row',
    margin: 7,
  },
});
