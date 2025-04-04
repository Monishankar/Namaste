import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForgotPassword = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('email'); // Default is email
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: "monishankar0@gmail.com", // Replace with your Google web client ID
  //   });
  // }, []);
const handleContinue = () =>{
  navigation.navigate('verifactionCode');
}
  const handleSinPress = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'monishankar0@gmail.com', // Replace with your Google web client ID
    });
  }, []);
  return (
    <MainLayout pageTitle="Forgot Password">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Forgot password 🤔</Text>
        <Text style={styles.socialInfo}>
          Select which contact details should we use to reset your password
        </Text>
        <View style={styles.contentSeparator}>
          <Image
            source={require('../../assets/forgotPassIcon.png')}
            style={styles.forgotPassIcon}
          />
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => setSelectedOption('email')}>
              <View style={styles.optionContent}>
                <MaterialIcons
                  name="email"
                  size={24}
                  color="#1a85ff"
                  style={styles.icon}
                />
                <View style={styles.optionClick}>
                  <Text style={styles.optionText}>Email</Text>
                  <Text>monishankar0@gmail.com</Text>
                </View>
              </View>
              <View
                style={[
                  styles.radioButton,
                  selectedOption === 'email' && styles.radioSelected,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => setSelectedOption('phone')}>
              <View style={styles.optionContent}>
                <MaterialIcons
                  name="phone"
                  size={24}
                  color="#1a85ff"
                  style={styles.icon}
                />
                <View style={styles.optionClick}>
                  <Text style={styles.optionText}>Phone</Text>
                  <Text>+91-70026XXXXX</Text>
                </View>
              </View>
              <View
                style={[
                  styles.radioButton,
                  selectedOption === 'phone' && styles.radioSelected,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSinPress}>
              <Text style={styles.buttonText} onPress={handleContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  socialInfo: {color: 'grey', marginTop: 20},
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  icon: {
    width: 150, // Adjust as needed
    height: 100,
    resizeMode: 'contain',
  },
  forgotPassIcon: {
    marginTop: 20,
    width: 260, // Adjust width as needed
    height: 250, // Adjust height as needed
    resizeMode: 'contain', // Ensures it scales properly
    alignSelf: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 280,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionClick: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a85ff',
    backgroundColor: 'white',
  },
  radioSelected: {
    backgroundColor: '#1a85ff',
  },
  toggleContainer: {
    marginTop: 20,
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
    fontSize: 18,
    textAlign: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    top: 0,
    alignItems: 'flex-start',
  },
});
export default ForgotPassword;
