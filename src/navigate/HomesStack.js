/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screen/tabRoute/HomeScreen';
import PopularProduct from '../screen/tabRoute/PopularProduct';
import DetailItems from '../screen/tabRoute/DetailItems';
import Notification from '../screen/tabRoute/Notification';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="popularProduct" component={PopularProduct} />
      <Stack.Screen name="detailItems" component={DetailItems} />
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
}
