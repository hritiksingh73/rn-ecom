import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  topRightHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortStyl: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '9%',
    marginHorizontal: 8,
  },
});

export default styles;
