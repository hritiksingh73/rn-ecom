import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation';
import { DefaultNavigationTheme } from './src/theme/navigation';
import { Provider as StoreProvider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer theme={DefaultNavigationTheme}>
            <MainNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
