import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerNavigation: {
    paddingLeft: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  mainContainer: {
    width: '90%',
    height: 100,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    width: '75%',
    padding: 20,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight:20
  },
  decreaseButton: {
    height: 30,
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 5,
  },
  increarseButton: {
    height: 30,
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    marginTop: 5,
  },
  flatlistImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  Quantityadjustment: {
    flexDirection: 'row',
  },
});

export default styles;
