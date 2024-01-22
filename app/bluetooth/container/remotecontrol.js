import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RemoteControl = () => {
  return (
    <View style={styles.container}>
      {/* Circular joystick */}
      <View style={styles.joystick}>
        {/* Up button */}
        <TouchableOpacity style={[styles.button, styles.upButton]} onPress={() => console.log('Up')}>
          <Image source={require('../../icons/up.png')} style={styles.icon} />
        </TouchableOpacity>
        {/* Right button */}
        <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={() => console.log('Right')}>
          <Image source={require('../../icons/right.png')} style={styles.icon} />
        </TouchableOpacity>
        {/* Down button */}
        <TouchableOpacity style={[styles.button, styles.downButton]} onPress={() => console.log('Down')}>
          <Image source={require('../../icons/down.png')} style={styles.icon} />
        </TouchableOpacity>
        {/* Left button */}
        <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={() => console.log('Left')}>
          <Image source={require('../../icons/left.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joystick: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  upButton: {
    top: 10,
  },
  rightButton: {
    right: 10,
  },
  downButton: {
    bottom: 10,
  },
  leftButton: {
    left: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});

export default RemoteControl;
