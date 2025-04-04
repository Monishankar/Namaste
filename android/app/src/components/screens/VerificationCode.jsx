import React, { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import MainLayout from '../MainLayout';

const VerificationCode = ({ navigation }) => {
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState(['', '', '', '']); // Store OTP values as array

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Only allow numbers
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleContinue = () => {
    const enteredOtp = otp.join(''); // Convert array to string
    if (enteredOtp.length === 4) {
      navigation.navigate('verifactioncode');
    } else {
      alert('Please enter a 4-digit OTP.');
    }
  };

  const handleResendCode = () => {
    setTimer(30); // Reset timer
    setOtp(['', '', '', '']); // Clear OTP inputs
    // Add logic to resend OTP here
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'monishankar0@gmail.com',
    });
  }, []);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <MainLayout pageTitle="Verification Code">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Enter Verification Code</Text>
        <Text style={styles.socialInfo}>
          We have sent the verification code to your mobile number
        </Text>
        <View style={styles.contentSeparator}>
          <Image
            source={require('../../assets/otpImage.png')}
            style={styles.forgotPassIcon}
          />
          <View style={styles.toggleContainer}>
            {/* OTP Input Fields */}
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(index, value)}
                />
              ))}
            </View>

            {/* Timer / Resend Code */}
            <TouchableOpacity onPress={handleResendCode} style={styles.resendOtpMsg} disabled={timer > 0}>
              {timer > 0 ? (
                <Text style={styles.timerOtp}>Resend in {timer}s</Text>
              ) : (
                <Text style={styles.resendOtp}>Resend Code</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#1a85ff',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    width: 50,
    marginHorizontal: 5,
    backgroundColor: 'white',
    color: '#000',
  },
  resendOtpMsg: {
    alignSelf: 'center',
    marginTop: 10,
  },
  timerOtp: {
    color: 'grey',
    fontSize: 14,
  },
  resendOtp: {
    fontSize: 14,
    color: '#1a85ff',
    fontWeight: 'bold',
  },
  forgotPassIcon: {
    marginTop: 20,
    width: 260,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  toggleContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#1a85ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default VerificationCode;
