import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/tabNavigatorScreen/HomeScreen';

import FruitsGalleryScreen from '../screens/nativeStackScreens/FruitsGalleryScreen';
import VegetablesGalleryScreen from '../screens/nativeStackScreens/VegetablesGalleryScreen';
import PulsesGalleryScreen from '../screens/nativeStackScreens/PulsesGalleryScreen';

import ItemDetails from '../screens/nativeStackScreens/ItemDetails';
import ItemSearch from '../screens/nativeStackScreens/ItemSearch';

import Sort from '../screens/nativeStackScreens/Sort';

const TabHomeNavigator = () => {
  const Filter = createNativeStackNavigator();
  return (
    <Filter.Navigator>
      <Filter.Screen
        name="Super Fresh"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Fruits"
        component={FruitsGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Vegetables"
        component={VegetablesGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Pulses"
        component={PulsesGalleryScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Feather name={'bell'} size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Filter.Screen
        name="Sort"
        component={Sort}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{headerShown: false}}
      />
      <Filter.Screen
        name="ItemSearch"
        component={ItemSearch}
        options={{headerShown: false}}
      />
    </Filter.Navigator>
  );
};

export default TabHomeNavigator;
