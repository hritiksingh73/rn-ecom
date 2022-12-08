import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:10
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
     marginTop:10
    },
    imgContainer: {
      paddingHorizontal:0,
      alignItems: 'center',
      paddingTop:10
    },
    choices:{
      flexDirection:"row",
      borderWidth:1,
      borderColor: '#e5e5e5'
    },
    filter:{
      flexDirection:"row",
      flex:1,
      alignItems:"center",
      alignContent:"center",
      justifyContent: 'center',
      paddingVertical:10,
      borderWidth:1,
      borderColor: '#e5e5e5',
    },
  });

  export default styles;