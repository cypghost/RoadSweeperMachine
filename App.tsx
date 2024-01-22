/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  // View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BluetoothList from './app/bluetooth/container/bluetooth-list';
import HomeScreen from './app/bluetooth/container/home.js';
import OptionsScreen from './app/bluetooth/container/options.js';

const Stack = createNativeStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header for Home screen
        />
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{ headerShown: false }} // Hide the header for Options screen
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <BluetoothList />
  )
};

export default App;
