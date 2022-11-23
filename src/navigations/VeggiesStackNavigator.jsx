import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SuperFreshScreen from '../screens/SuperFreshScreen';
import PopularProductScreen from '../screens/PopularProductScreen'
import SortScreen from '../screens/SortScreen'


const Stack = createNativeStackNavigator();

const VeggiesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Super Fresh" component={SuperFreshScreen} />
      <Stack.Screen name="Popular Products" component={PopularProductScreen} />
      <Stack.Screen name="Sort" component={SortScreen} />
    </Stack.Navigator>
  );
};
export default VeggiesStackNavigator;

