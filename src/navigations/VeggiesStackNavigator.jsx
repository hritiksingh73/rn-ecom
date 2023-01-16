import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/tabScreen/HomeScreen/index.js';
import SuperFreshScreen from '../screens/stackScreen/SuperFreshScreen/index';
import PopularProductScreen from '../screens/stackScreen/PopularProductScreen/index';
import SortScreen from '../screens/stackScreen/SortScreen/index';
import ProductDetailsScreen from '../screens/stackScreen/ProductDetailsScreen';
import WishListScreen from '../screens/stackScreen/WishListScreen';
import NotificationScreen from '../screens/stackScreen/NotificationScreen';
import ManageAddressScreen from '../screens/stackScreen/AccountScreen/ManageAddressScreen';
import AddAddressScreen from '../screens/stackScreen/AccountScreen/AddAddressScreen';
import EditAddressScreen from '../screens/stackScreen/AccountScreen/EditAddressScreen';
import OrderHistoryScreen from '../screens/stackScreen/AccountScreen/OrderHistoryScreen'
import OrderDetailScreen from '../screens/stackScreen/AccountScreen/OrderDetailScreen'

const Stack = createNativeStackNavigator();

const VeggiesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Super Fresh" component={SuperFreshScreen} />
      <Stack.Screen name="Popular Products" component={PopularProductScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="WishList" component={WishListScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Manage Address" component={ManageAddressScreen} />
      <Stack.Screen name="Add Address" component={AddAddressScreen} />
      <Stack.Screen name="Edit Address" component={EditAddressScreen}/>
      <Stack.Screen name="Order History" component={OrderHistoryScreen}/>
      <Stack.Screen name="Order Detail" component={OrderDetailScreen}/>
      <Stack.Screen name="Sort" component={SortScreen} />
      
    </Stack.Navigator> 
  );
};
export default VeggiesStackNavigator;
