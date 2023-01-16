import {StyleSheet} from 'react-native';
import color from '../../../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIconStyle: {
    marginLeft: 10,
  },
  headingText: {
    marginLeft: 140,
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
  },
  heading: {
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 20,
  },
  mainCardStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 20,
    width: '90%',
    height: 50,
    padding: 5,
    margin: 10,
    borderColor: color.lightgrey,
    marginTop: 20,
  },
  codStyle: {
    marginLeft: 20,
  },

  btnStyle: {
    backgroundColor: color.primary,
    width: '30%',
    height: 45,
    marginLeft: 140,
    margin: 10,
    padding: 2,
  },
});

export default styles;
