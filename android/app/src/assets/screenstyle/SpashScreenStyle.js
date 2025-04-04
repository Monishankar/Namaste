import {Dimensions} from 'react-native';
export const SplashScreenStyle = {
  container: {
    height:
      (Dimensions.get('window').height - Dimensions.get('window').height / 12) /
      1.5,

    backgroundColor: 'black',
    //backfaceVisibility: blur,
    top: 50,
    bottom: -40,
    width: (Dimensions.get('window').width / 10) * 9,
    borderRadius: 20,

    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  backgroundImage: {
    justifyContent: 'center',
    //  height:Dimensions.get("window").height,
    //  width:Dimensions.get("window").width,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    tintColor: '#340707',
    marginBottom: 20,
    height:
      (Dimensions.get('window').height - Dimensions.get('window').height / 12) /
      3.5,
    width: (Dimensions.get('window').width / 10) * 5,
  },
  MainContainer: {
    flex: 1,
    alignContent: 'center',
  },
  text1: {
    color: '#340707',
    fontSize: 30,
    paddingLeft: 5,
  },
  text2: {
    color: '#340707',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
};
