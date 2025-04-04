import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

logOutCallBack = () => {
  let heading = translate?.logout?.[this.state.lang];
  let title = translate?.areYSYWTL?.[this.state.lang];

  Alert.alert(heading, title, [
    {
      text: translate?.cancel?.[this.state.lang],
      style: 'cancel',
    },
    {
      text: translate?.logout?.[this.state.lang],
      onPress: () => {
        AsyncStorage.removeItem('token');

        this.props.navigation.navigate('MainMenu');
      },
    },
  ]);
};
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})