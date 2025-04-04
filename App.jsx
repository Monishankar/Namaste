import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StartScreen from './android/app/src/components/screens/StartScreen';
import Register from './android/app/src/components/screens/Register';
import Login from './android/app/src/components/login/Login';
import {HStack,  NativeBaseProvider,  StatusBar} from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './android/app/src/components/screens/ForgotPassword';
import VerificationCode from './android/app/src/components/screens/VerificationCode';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassward" component={ForgotPassword} />
          <Stack.Screen name="verifactionCode" component={VerificationCode} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
