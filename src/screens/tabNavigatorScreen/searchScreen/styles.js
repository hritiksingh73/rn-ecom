import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    HorizMargin: {
      marginHorizontal: '2%',
    },
    txtContainer: {
      backgroundColor: '#e6e6e6',
      padding: 15,
      marginVertical: 20,
      marginHorizontal: '4%',
      flexDirection: 'row',	
    },
    txtFields: {
      fontSize: 18,
      paddingLeft: 10,
    },
    itemOuterContainer: {
      width: '46%',
      height: 200,
      borderWidth: 1,
      borderColor: '#bfbfbf',
      borderRadius: 3,
      margin: '2%',
    },
    itemContainer: {
      width: '100%',
      height: '70%',
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    itemTextContainer: {
      width: '100%',
      height: '30%',
    },
    itemName: {
      fontSize: 16,
      padding: 8,
      paddingBottom: 2,
    },
    itemRating: {
      fontSize: 25,
      padding: 8,
      paddingTop: 2,
    },
    itemImage: {
      width: '100%',
      height: '100%',
    },
  });

export default styles;