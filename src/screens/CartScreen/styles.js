import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cart: {
      fontSize: 20,
      marginLeft: 200,
    },
    title: {
      fontSize: 15,
    },
    vegetableImage: {
      flexDirection: 'row',
    },
    delete: {
      color: 'white',
    },
    number: {
      borderWidth: 1,
      width: 40,
      height: 40,
      borderColor: 'lightgrey',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 10,
    },
    itemDetail: {
      width: '60%',
      padding: 20,
    },
    add: {
      borderWidth: 1,
      width: 40,
      height: 40,
      borderColor: 'lightgrey',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    remove: {
      height: 30,
      borderRadius: 10,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      marginTop: 5,
    },
    addButton: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: '3%',
      justifyContent: 'flex-end',
    },
    freshImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginHorizontal: 10,
    },
    mainList: {
      width: 200,
      height: 100,
      borderRadius: 15,
      padding: 10,
      margin: 10,
      marginTop: 10,
      borderWidth: 0.2,
      borderColor: 'lightgrey',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    fruitImage: {
      width: 60,
      height: 90,
      borderRadius: 10,
      marginRight: 15,
      marginLeft: 10,
    },
  });

  export default styles;