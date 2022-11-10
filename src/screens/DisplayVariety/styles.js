import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBar: {
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'flex-end',
      alignSelf: 'center',
      width: 350,
    },
    mainContainer: {
      flexDirection: 'row',
    },
    selectionCard: {
      width: 190,
      height: 180,
      paddingHorizontal: 5,
      borderRadius: 10,
      shadowColor: 'grey',
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 10,
    },
    imageTitle: {
      fontSize: 15,
      color: '#344055',
      textAlign: 'center',
    },
    cardImage: {
      width: '100%',
      height: '90%',
    },
  });

  export default styles;
