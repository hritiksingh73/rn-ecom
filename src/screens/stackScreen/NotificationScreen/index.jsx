// import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
// import styles from './styles.js';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import strings from '../../../constant/strings.js';

// const NotificationScreen = () => {
//   const {goBack} = useNavigation();
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <AntDesign name="left" size={20} onPress={() => goBack()} />
//         <Text style={styles.headingText}>Notification</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text1}</Text>
//         <Text style={styles.textNoStyle}>{strings.text4}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text2}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text3}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text1}</Text>
//         <Text style={styles.textNoStyle}>{strings.text4}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text2}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>

//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text3}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text1}</Text>
//         <Text style={styles.textNoStyle}>{strings.text4}</Text>
//       </View>

//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text2}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>
//       <View style={styles.headingStyle}>
//         <Text style={styles.textStyle}>{strings.text3}</Text>
//         <Text style={styles.textNoStyle}>{strings.text5}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default NotificationScreen;


import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Notification from '../../../data/Notification.js'

const textNotifications = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textStyle}>{item.text}</Text>
      <Text style={styles.timeStyle}>{item.time}</Text>
    </View>
  );
};

const NotificationScreen = () => {
    const {goBack} = useNavigation();
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <AntDesign name="left" size={20} onPress={() => goBack()} />
          <Text style={styles.headingText}>Notification</Text>
        </View>
      <FlatList
        data={Notification}
        renderItem={textNotifications}
        ItemSeparatorComponent={() => 
        <View style={styles.itemDivider}></View>}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;