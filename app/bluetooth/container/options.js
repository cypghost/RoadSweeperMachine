import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RemoteControl from './remotecontrol';
import BluetoothList from './bluetooth-list';

const Tab = createBottomTabNavigator();

const OptionsScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BluetoothList" component={BluetoothList} />
      <Tab.Screen name="RemoteControl" component={RemoteControl} />
    </Tab.Navigator> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#121212',
    borderRadius: 30,
    width: '90%',
  },
  optionButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default OptionsScreen;
