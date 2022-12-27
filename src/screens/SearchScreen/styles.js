import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '35%',
  },
  recentSearch: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '4%',
    marginBottom: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '93%',
    height: '7%',
    backgroundColor: 'lightgrey',
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  searchItems: {
    marginHorizontal: 15,
    alignItems: 'center',
    borderColor: 'lightgrey',
    marginVertical: 10,
    borderRadius: 40,
    padding: 10,
    backgroundColor: 'lightgrey',
    width: '26%',
    height: '75%',
  },
  recommendedTxt: {
    fontWeight: 'bold',
    bottom: 5,
    fontSize: 20,
    marginLeft: '4%',
  },
  recommendedProductContainer: {
    height: '40%',
    paddingTop: 10,
  },
});
