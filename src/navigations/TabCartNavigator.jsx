import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/tabNavigatorScreen/CartScreen';

const TabCartNavigator = () => {
  const Cart = createNativeStackNavigator();
  return(
    <Cart.Navigator>
      <Cart.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Cart.Navigator>
  )
}

export default TabCartNavigator;