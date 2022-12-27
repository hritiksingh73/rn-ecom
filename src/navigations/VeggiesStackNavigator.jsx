import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/tabScreen/HomeScreen/index.js';
import SuperFreshScreen from '../screens/stackScreen/SuperFreshScreen/index';
import PopularProductScreen from '../screens/stackScreen/PopularProductScreen/index'
import SortScreen from '../screens/stackScreen/SortScreen/index'
import ProductDetailsScreen from '../screens/stackScreen/ProductDetailsScreen'
import WishListScreen from '../screens/stackScreen/WishListScreen'


const Stack = createNativeStackNavigator();

const VeggiesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Super Fresh" component={SuperFreshScreen} />
      <Stack.Screen name="Popular Products" component={PopularProductScreen} />
      <Stack.Screen name="Product Details" component ={ProductDetailsScreen}/>
      <Stack.Screen name="WishList" component={WishListScreen}/>
      <Stack.Screen name="Sort" component={SortScreen} />
    </Stack.Navigator>
  );
};
export default VeggiesStackNavigator;

