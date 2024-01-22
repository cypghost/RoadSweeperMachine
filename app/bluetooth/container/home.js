import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../icons/aastu.png')} style={styles.coverImage} />
      <Text style={styles.headerText}>Remote Controller</Text>
      <Text style={styles.sectionText}>Presented By IETP G50</Text>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Options')}>
        <Text style={styles.optionButtonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  coverImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  sectionText: {
    color: 'black',
  },
  optionButton: {
    marginTop: 20,
    padding: 20,
    width: '90%',
    backgroundColor: '#121212',
    borderRadius: 30,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default HomeScreen;
