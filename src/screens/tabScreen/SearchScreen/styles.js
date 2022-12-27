import {StyleSheet} from 'react-native';
import color from '../../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    alignItems: 'center',
    marginLeft: 150,
    fontSize: 20,
    fontWeight: '500',
  },
  textInputStyle: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  recent: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
  },
  inputStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EBEDEF',
    marginTop: 20,
    marginLeft: 20,
    width: 350,
    height: 50,
  },
  iconStyle: {
    padding: 8,
  },
  text: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 5,
    padding: 12,
    height: 42,
    fontSize: 14,
    width: 100,
    marginLeft: 20,
    backgroundColor: '#EBEDEF',
  },
  data: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: color.lightgrey,
    marginBottom: 120,
  },
  image: {
    resizeMode: 'cover',
    width: 180,
    height: '50%',
  },
  titleText: {
    fontSize: 18,
    margin: 10,
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    color: color.primary,
    marginLeft: 10,
  },
  buttonText: {
    borderWidth: 1,
    borderColor: color.lightgrey,
    width: 150,
    height: 45,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  main: {
    flexDirection: 'row',
  },
});

export default styles;
