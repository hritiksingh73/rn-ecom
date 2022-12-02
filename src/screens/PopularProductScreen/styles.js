import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginTop: 15,
    },
    flatlistData: {
      width: 150,
      height: 150,
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    button: {
      paddingHorizontal: 5,
      alignItems: 'center',
    },
    topHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
    title: {
      fontSize:18,
      marginLeft: 10,
      margin: 10,
    },
    dollar: {
      fontSize:15,
      marginLeft: 10,
      color:'green'
    },
    flatlistData: {
      marginTop: 20,
      height: 100,
      width: 200,
      margin: 5,
    },
    cart: {
      margin: 10,
      fontSize: 15,
      borderWidth: 1,
      borderColor: 'grey',
      padding:10
    },
    data: {
      height:250,
      width:220,
      borderWidth: 1,
      borderColor: 'grey',
    },
    main: {
      borderWidth: 1,
      borderColor: 'lightgrey',
      margin: 8,
    },
    item: {
      flexDirection: 'row',
    },
    sort: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    filter: {
      flexDirection: 'row',
    },
    sortItem: {
      margin: 20,
      fontSize: 15,
      flexDirection: 'row',
    },
    filterItem: {
      margin: 20,
      fontSize: 15,
    },
    size: {
      margin: 15,
    },
  });

  export default styles;