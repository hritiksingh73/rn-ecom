import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SuperFreshScreen from '../screens/SuperFreshScreen';
import PopularProductsScreen from '../screens/SuperFreshScreen/PopularProductsScreen';
import ProductDetails from '../screens/ProductDetails';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator();

const GroceryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Super Fresh" component={SuperFreshScreen} />
      <Stack.Screen name="Popular Products" component={PopularProductsScreen} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
export default GroceryStackNavigator;
