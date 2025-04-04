import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Image, StatusBar} from 'native-base';

const MainLayout = ({children, pageTitle, navigation }) => {
  return (
    <ImageBackground pageTitle="Namaste App"
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.header}>
          <Text style={styles.headerText}>{pageTitle}</Text>
        </View>
        <View>
          
        </View>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    height: 60,
    backgroundColor: '#1a85ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, // Make sure content takes up remaining space
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    padding: 20,
  },
});

export default MainLayout;
