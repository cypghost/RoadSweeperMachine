import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';

const BluetoothList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function requestBluetoothPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH,
          {
            title: 'Bluetooth Permission',
            message: 'App needs access to your Bluetooth for device scanning.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Bluetooth permission granted');
        } else {
          console.log('Bluetooth permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestBluetoothPermission();

    BleManager.start({ showAlert: false });
    BleManager.enableBluetooth()
      .then(() => {
        console.log('Bluetooth is enabled');
      })
      .catch((err) => {
        console.error(err);
      });

    const handleDiscover = (device) => {
      setDevices((prevDevices) => {
        if (!prevDevices.some((prevDevice) => prevDevice.id === device.id)) {
          return [...prevDevices, device];
        }
        return prevDevices;
      });
    };

    const handleStopScan = () => {
      console.log('Scan stopped');
    };

    BleManager.addListener('BleManagerDiscoverPeripheral', handleDiscover);
    BleManager.addListener('BleManagerStopScan', handleStopScan);

    return () => {
      BleManager.stopScan();
      BleManager.removeListener('BleManagerDiscoverPeripheral', handleDiscover);
      BleManager.removeListener('BleManagerStopScan', handleStopScan);
    };
  }, []);

  const startScan = () => {
    BleManager.scan([], 5, true)
      .then(() => {
        console.log('Scan started');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const connectToDevice = (device) => {
    BleManager.connect(device.id)
      .then(() => {
        console.log('Connected to device');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const disconnectFromDevice = (device) => {
    BleManager.disconnect(device.id)
      .then(() => {
        console.log('Disconnected from device');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View>
      <Text>Bluetooth Devices:</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name || 'Unknown Device'}</Text>
            <Text>{item.id}</Text>
            <Button title="Connect" onPress={() => connectToDevice(item)} />
            <Button title="Disconnect" onPress={() => disconnectFromDevice(item)} />
          </View>
        )}
      />
      <Button title="Scan for Devices" onPress={startScan} />
    </View>
  );
};

export default BluetoothList;

// import React from 'react';
// import {
//     View, 
//     Text,
//     FlatList
// } from 'react-native';
// import Layout from '../components/bluetooth-list-layout';

// const BluetoothList = (props) => {
//     const lista = [
//         {
//             name: "Biruk",
//             key: "1"
//         },
//         {
//             name: "Mesfin",
//             key: "2"
//         }
//     ]
    
//     return (
//         <Layout title='Bluetooth'>
//             <FlatList 
//                 data={lista}
//                 ListEmptyComponent={() => <Text>No hay elementos</Text>}
//                 renderItem={({item}) => <Text style={{fontSize: 20}}>{item.name}</Text>}
//             />
//         </Layout>
//     )
// }

// export default BluetoothList