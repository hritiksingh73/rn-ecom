import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from '../screens/tabNavigatorScreen/SearchScreen';
import HomeScreen from '../screens/tabNavigatorScreen/HomeScreen';
import AccountScreen from '../screens/tabNavigatorScreen/AccountScreen';
import FruitsGalleryScreen from '../screens/nativeStackScreens/FruitsGalleryScreen';
import Sort from '../screens/nativeStackScreens/Sort';
import VegetablesGalleryScreen from '../screens/nativeStackScreens/VegetablesGalleryScreen';
import MyProfile from '../screens/nativeStackScreens/MyProfile';
import EditProfile from '../screens/nativeStackScreens/EditProfile';
import ManageAddresses from '../screens/nativeStackScreens/ManageAddresses';
import OrderHistory from '../screens/nativeStackScreens/OrderHistory';
import MyWishlist from '../screens/nativeStackScreens/MyWishlist';
import PulsesGalleryScreen from '../screens/nativeStackScreens/PulsesGalleryScreen';
import CartScreen from '../screens/tabNavigatorScreen/CartScreen';
import FilterScreen from '../screens/nativeStackScreens/FilterScreen';



const TabNavigator = () => {
  const tabStack = createBottomTabNavigator();

  return (
    <tabStack.Navigator>
      <tabStack.Screen
        name="Home"
        // component={HomeScreen}
        component={FilterStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'home'} size={25} {...props} />,
        }}
      />
      <tabStack.Screen
        name="Search"
        // component={FilterStackNavigator}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'search'} size={25} {...props} />,
        }}
      />
      <tabStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <Feather name={'shopping-bag'} size={25} {...props} />
          ),
        }}
      />
      <tabStack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => <Feather name={'user'} size={25} {...props} />,
        }}
      />
    </tabStack.Navigator>
  );
};

const FilterStackNavigator = () => {
  const Filter = createNativeStackNavigator();
  return (
    <Filter.Navigator>
      <Filter.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="Fruits"
        component={FruitsGalleryScreen}
        options={{headerShown: true, headerBackTitleVisible: false, 
          headerRight: (() => {
          return(
            <TouchableOpacity>
              <Feather name={'bell'} size={25}/>
            </TouchableOpacity>
          )})
        }}
      />
      <Filter.Screen
        name="Vegetables"
        component={VegetablesGalleryScreen}
        options={{headerShown: true, headerBackTitleVisible: false,
          headerRight: (() => {
            return(
              <TouchableOpacity>
                <Feather name={'bell'} size={25}/>
              </TouchableOpacity>
            )})
          }}
      />
      <Filter.Screen
        name="Pulses"
        component={PulsesGalleryScreen}
        options={{headerShown: true, headerBackTitleVisible: false,
          headerRight: (() => {
            return(
              <TouchableOpacity>
                <Feather name={'bell'} size={25}/>
              </TouchableOpacity>
            )})
          }}
      />
      <Filter.Screen
        name="Sort"
        component={Sort}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="Filter"
        component={FilterScreen}
        options={{headerShown: false}}
      />
    </Filter.Navigator>
  );
};

const MyAccountScreen = () => {
  const MyAccount = createNativeStackNavigator();
  return (
    <MyAccount.Navigator>
      <MyAccount.Screen
        name="My Account"
        component={AccountScreen}
        options={{headerShown: true, 
          headerRight: (() => {
          return(
            <TouchableOpacity onPress={()=>alert('bell ringing!')}>
              <Feather name={'bell'} size={25}/>
            </TouchableOpacity>
          )})
        }}
      />
      <MyAccount.Screen
        name="Profile"
        component={MyProfile}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: (() => {
            return(
              <TouchableOpacity>
                <Feather name={'edit'} size={25}/>
              </TouchableOpacity>
            )})
        }}
      />
      <MyAccount.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="Manage Addresses"
        component={ManageAddresses}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="Order History"
        component={OrderHistory}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <MyAccount.Screen
        name="My Wishlist"
        component={MyWishlist}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </MyAccount.Navigator>
  );
};

export default TabNavigator;
