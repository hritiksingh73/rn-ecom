// import React from 'react'
// import { View, StyleSheet, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

// const App = () => {
//   return (
//     <View style={styles.container} >
//       <Text style={styles.heading} >Hello World</Text>
//       <Icon name="search1" size={30} color="#900" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white"
//   },
//   heading: {

//   }
// })

// export default App

// import React from "react";
// import {View, Text, StyleSheet} from "react-native"
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from './src/navigations'
// //import { Provider } from 'react-redux';
// //import Store from './src/redux/store/Store';
// import LoginScreen from "./src/screens/LoginScreen"
// import RegisterScreen from './src/screens/RegisterScreen'
// ////import Search from './src/screens/Search'
// //import Search from "./src/screens/Search"


// const App = () => {
//     return (
        
        
//         {/* <Provider store={Store}> */}
//              <NavigationContainer>   
//            <AppNavigator/>  
//               </NavigationContainer>  
            
//         {/* //</Provider> */}
        
        
//     )
// };



// export default App;

import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from "./src/navigations"
import { Provider } from 'react-redux';
import Store from './src/redux/store/Store';

const App = () => {
    return(
        <Provider store={Store}> 
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
        </Provider>
    )
}
export default App;