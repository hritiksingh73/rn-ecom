import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  groceryImage: {
    width: 200,
    height: 50,
    marginTop: 50,
  },
  welcome: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'green',
    borderTopColor: 'white',
    borderLeftColor: 'white',
  },
  placeholder: {
    padding: 20,
    width: 350,
  },
  error: {
    marginRight: 160,
    color: 'red',
  },
  forgot: {
    color: color.primary,
    fontSize: 15,
    padding: 10,
  },
  login: {
    margin: 10,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    margin: 5,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    padding: 30,
  },
  facebook: {
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 10,
    paddingTop: 20,
  },
  google: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 2,
    paddingTop: 20,
    height: 42,
    width: 140,
    borderWidth: 1,
    marginLeft: 15,
  },
  account: {
    marginTop: 10,
    fontSize: 15,
  },
  view:{
    flexDirection:'row'
  },
  register: {
    marginTop: 10,
    color: color.primary,
    fontSize: 15,
  },
});

export default styles;
