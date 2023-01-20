/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screen/tabRoute/AccountScreen';
import ManageAddressScreen from '../screen/tabRoute/ManageAddressScreen';
import AddAddressScreen from '../screen/tabRoute/AddAddressScreen';
import EditUser from '../screen/EditUser';

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="accountScreen" component={AccountScreen} />
      <Stack.Screen name="manageAddress" component={ManageAddressScreen} />
      <Stack.Screen name="addAddress" component={AddAddressScreen} />
      <Stack.Screen name="editUser" component={EditUser} />
    </Stack.Navigator>
  );
}
