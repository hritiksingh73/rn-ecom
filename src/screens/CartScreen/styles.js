import {StyleSheet} from 'react-native';
import {Color} from '../../constant/Color';

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingLeft: 150,
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
    padding: 5,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 20,
    color: Color.green,
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
    borderWidth: 1,
    marginTop: 5,
  },
  quantityupdate: {
    height: 30,
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
  },
  flatlistImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  Quantityadjustment: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  billingText: {
    fontSize: 20,
    color: '#1a1b1d',
  },
  billingTextStyling: {
    fontSize: 16,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2b2d',
    color: '#2d2f37',
  },
  total: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
  billingStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
    margin: 10,
  },
  billing: {
    marginLeft: 20,
    paddingTop: 30,
  },
  apply: {
    color: 'green',
    paddingLeft: 150,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: '450',
  },
  couponInput: {
    paddingLeft: 10,
    paddingTop: 0,
    placeholderTextColor: Color.black,
    fontWeight: '550',
    fontSize: 20,
    paddingTop: 10,
  },
  couponContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    width: 370,

    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    borderColor: 'white',
    borderBottomColor: "'#2a2b2d'",
  },
  couponCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 18,
    // padding: 10,
    // paddingBottom: 16
    paddingTop: 10,
  },
  couponIcon: {
    paddingTop: 10,
  },
  billingUnits: {
    fontWeight: '800',
    fontSize: 15,
  },
  bottom: {
    backgroundColor: '#161e1b',
    padding: 10,
  },
  bottomApply: {
    color: 'green',
  },
  subTotal: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  saveMsg: {
    color: 'white',
    fontWeight: '500',
    fontSize: 13,
  },
});

export default styles;
