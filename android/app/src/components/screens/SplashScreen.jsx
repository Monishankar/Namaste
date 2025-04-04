import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {SplashScreenStyle} from '../../assets/screenstyle/SpashScreenStyle';

// Error handler for JS exceptions
const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
      Please close the app and start again!`,
      [
        {
          text: 'Close',
        },
      ],
    );
  } else {
    console.log(e); // Log to console for debugging
  }
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler(errorString => {
  console.log('Native exception handler triggered');
});

const SplashScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  // Handle navigation based on token in AsyncStorage
  useEffect(() => {
    const checkToken = async () => {
      navigation.navigate('StartScreen');
    };
    checkToken();
  }, [navigation]);

  // Styling
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Mulish-Bold',
    },
  });
  return ( 
    <SafeAreaView style={SplashScreenStyle.MainContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/namaste_logo.jpeg')}
          resizeMode="cover"
          style={SplashScreenStyle.backgroundImage}>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
