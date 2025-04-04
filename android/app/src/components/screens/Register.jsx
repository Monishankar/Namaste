import React, {useEffect, useState} from 'react';
import {HStack, Checkbox} from 'native-base';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
} from 'react-native';
import MainLayout from '../MainLayout';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Register = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    console.log('Checkbox clicked:', !isChecked);
  };
  const handleTnCPress = () => {
    Alert.alert('Terms & Conditions', 'Here are the terms and conditions...');
  };
  const handleSinPress = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'monishankar0@gmail.com', // Replace with your Google web client ID
    });
  }, []);
  
  return (
    <MainLayout pageTitle="Register">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Onboard!</Text>
        <Text>{'\n'}Let's help you meet up your tracks.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor={styles.placeholderColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor={styles.placeholderColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor={styles.placeholderColor}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor={styles.placeholderColor}
          secureTextEntry
        />
        <HStack alignItems="center" space={2} style={styles.checkboxContainer}>
          <Checkbox
            isChecked={isChecked}
            onChange={handleCheckboxClick}
            accessibilityLabel="Accept Terms & Conditions"
          />
          <Text>
            I have read and accept {''}
            <Text
              style={styles.tncText}
              onPress={handleTnCPress}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              T&C
            </Text>
          </Text>
        </HStack>
        <TouchableOpacity style={styles.button} onPress={handleSinPress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Back to Start Screen</Text>
        </TouchableOpacity>
        <Text style={styles.socialInfo}>Or continue with social account</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/SignInWithGoogle.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/SignInWithFacebook.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.alrdHvAccnt}>
          Already have an account?{' '}
          <Text style={styles.signIn} onPress={handleSinPress}>
            Sign in
          </Text>
        </Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 15,
  },
  socialInfo: {color: 'grey', marginTop: 20},
  alrdHvAccnt: {marginTop: 10, fontWeight: 'bold',
  },
  signIn: {color: 'blue'},
  tncText: {color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline'},
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  label: {fontSize: 16, fontWeight: 'bold', marginTop: 10},
  input: {
    width: 300,
    padding: 10,
    borderRadius: 55,
    marginVertical: 10,
    backgroundColor: 'white',
    color: '#000',
  },
  placeholderColor: 'black',
  socialButtons: {
    flexDirection: 'row', // Aligns images side by side
    justifyContent: 'center', // Centers them
    alignItems: 'center', // Aligns vertically
    marginTop: 10,
    gap: 40, // Adds spacing between buttons (if React Native version supports it)
  },
  icon: {
    width: 150, // Adjust as needed
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#1a85ff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    color: 'white',
    fontWeight: 'bold',
    width: 200,
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {color: '#1a85ff', marginTop: 15, textDecorationLine: 'underline'},
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    top: 0,
  },
});
export default Register;
