import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    margin: 8,
  },
  veggies: {
    width: '100%',
    height: '70%',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EBEDEF',
    marginTop: 20,
    marginLeft: 20,
    width: 400,
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'silver',
  },
  textInput: {
    fontSize: 16,
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default styles;
