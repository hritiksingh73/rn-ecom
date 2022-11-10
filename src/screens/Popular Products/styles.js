import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      width: '50%',
      backgroundColor: '#fff',
      borderRadius: 5,
      marginVertical: 20,
    },
    mainContainer: {
      width: '100%',
      backgroundColor: '#b696d7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgStyle: {
      width: '60%',
      height: 160,
    },
    imgContainer: {
      paddingHorizontal: 5,
      alignItems: 'center',
    },
  });

  export default styles;