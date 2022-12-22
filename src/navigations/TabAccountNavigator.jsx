import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AccountScreen from '../screens/tabNavigatorScreen/AccountScreen';
import MyProfile from '../screens/nativeStackScreens/MyProfile';
import EditProfile from '../screens/nativeStackScreens/EditProfile';
import ManageAddresses from '../screens/nativeStackScreens/ManageAddresses';
import OrderHistory from '../screens/nativeStackScreens/OrderHistory';
import MyWishlist from '../screens/nativeStackScreens/MyWishlist';

const TabAccountNavigator = () => {
    const MyAccount = createNativeStackNavigator();
    return (
      <MyAccount.Navigator>
        <MyAccount.Screen
          name="My Account"
          component={AccountScreen}
          options={{
            headerShown: true,
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => alert('bell ringing!')}>
                  <Feather name={'bell'} size={25} />
                </TouchableOpacity>
              );
            },
          }}
        />
        <MyAccount.Screen
          name="Profile"
          component={MyProfile}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <Feather name={'edit'} size={25} />
                </TouchableOpacity>
              );
            },
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

export default TabAccountNavigator;