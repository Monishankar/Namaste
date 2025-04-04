import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MainLayout from '../MainLayout';

const StartScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.welcomeText}>
        <Text>Welcome to</Text>
           <Text style={styles.boldText}>{'\n'}Namaste App</Text>
          {'\n'}Your smart solution for
          <Text>{'\n'}staying organized and</Text>
          <Text>{'\n'}on track!</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1a85ff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    width:200,
    fontSize: 18,
    textAlign: 'center',
  },
});
export default StartScreen;
