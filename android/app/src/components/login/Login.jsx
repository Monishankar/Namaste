import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {HStack, Stack} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translate} from '../../assets/Config/translate';
import MainLayout from '../MainLayout';

const Login = ({navigation, pageName}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [lang, setLang] = useState('en');
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    const getLanguage = async () => {
      const langdt = await AsyncStorage.getItem('lang');
      setLang(langdt || 'en');
    };
    getLanguage();
  }, []);

  const showToast = msg => {
    ToastAndroid.show(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM, 10, 100);
  };
  const handleRegPress = () => {
    navigation.navigate('Register');
  };
  
  const makeid = length => {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const login = async () => {
    const passwordString = makeid(10) + password;

    if (email === '' || passwordString === '') {
      showToast('Please enter your email & password!');
      return;
    }

    setLoader(true);
    // const passwordEncoded = Base64.btoa(passwordString);
    const passwordEncoded = password;
    try {
      setLoader(false);
      // const response = await fetch(constants.server + '/api/data-retrieval/users/login', {
      const response = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password: passwordEncoded,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();

      if (data?.id > 0 && data?.accessToken) {
        await AsyncStorage.setItem('token', JSON.stringify(data?.accessToken));
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        navigation.navigate('StartScreen');
      } else {
        Alert.alert(
          translate?.invalidLogin?.[lang],
          translate?.pcheckyd?.[lang],
        );
      }
    } catch (error) {
      Alert.alert(
        'Server Error',
        'Oops server not responding. Unable to connect server!',
      );
      console.log('error', error);
    } finally {
      setLoader(false);
    }
    
  };
const handleForgotPass =()=>{
  navigation.navigate('ForgotPassward');
}
  return (
    <MainLayout pageTitle="Login">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        {loader === true ? (
          <View style={styles.loaderContainer}>
            <View style={styles.loaderWrapper}>
              <ActivityIndicator size="large" color="#A6170A" />
              <Text>{translate?.pleaseWait?.[lang]}...</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
        <Image
          source={require('../../assets/welcomeIcon.png')}
          style={styles.welcomeIcon}
        />
        <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 50}}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor={styles.placeholderColor}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={!showPass}
            placeholderTextColor={styles.placeholderColor}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.togglePasswordButton}
            onPress={() => setShowPass(!showPass)}>
            <Image
              source={
                showPass
                  ? require('../../assets/icons/eye2.png')
                  : require('../../assets/icons/eye.png')
              }
            />
          </TouchableOpacity>
          <Text style={styles.forgotpassword} onPress={handleForgotPass}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Sign In</Text>
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
        <Text style={styles.dontHvAccnt}>
                  Don't have an account?{' '}
                  <Text style={styles.signIn} onPress={handleRegPress}>
                    Sign Up
                  </Text>
                </Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},

  welcomeIcon: {
    marginTop: 20,
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    resizeMode: 'contain', // Ensures it scales properly
    alignSelf: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    top: 0,
  },
  icon: {
    width: 150, // Adjust as needed
    height: 100,
    resizeMode: 'contain',
  },
  dontHvAccnt: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  signIn: {color: 'blue'},
  forgotpassword: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'blue',
    alignSelf: 'flex-end', // Aligns it to the right
    marginTop: 14, // Adds spacing below the button
    marginRight: 0,
    marginBottom: 30
  },
  socialInfo: {color: 'grey', marginTop: 20},
  socialButtons: {
    flexDirection: 'row', // Aligns images side by side
    justifyContent: 'center', // Centers them
    alignItems: 'center', // Aligns vertically
    marginTop: 10,
    gap: 40, // Adds spacing between buttons (if React Native version supports it)
  },
 

  input: {
    width: 300,
    padding: 10,
    borderRadius: 55,
    marginVertical: 10,
    backgroundColor: 'white',
    color: '#000',
  },
  placeholderColor: 'black',
  togglePasswordButton: {
    marginTop: -45,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  button: {
    marginTop: 5,
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
});

export default Login;
