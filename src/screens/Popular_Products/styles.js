import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      width: '50%',
      backgroundColor: '#fff',
      marginVertical: 2,
    },
    mainContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    price:{
      color:"green"
    },
    imgStyle: {
      width: '70%',
      height: 180,
    },
    imgContainer: {
      paddingHorizontal:0,
      alignItems: 'center',
    },
    choices:{
      flexDirection:"row"
    },
    filter:{
      flexDirection:"row",
      flex:1,
      alignItems:"center",
      alignContent:"center",
      justifyContent: 'center',
      paddingVertical:10
    },
  });

  export default styles;