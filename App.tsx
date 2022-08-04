/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
 
  StatusBar,
  StyleSheet,
 
  View,
} from 'react-native';

import { MovieDetails } from './src/screens/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { COLORS } from './src/theme/colors';
import { Provider } from 'react-redux';
import PersistStore from './src/store';
import { Navigator } from './src/navigation/navigator';
// import store from './src/store';
import { PersistGate } from 'redux-persist/integration/react';



const {store,persistor}=PersistStore();
const App = () => {
  
  return (
 
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
           <Navigator />
    </PersistGate>
  </Provider>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
