import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 25,
    color: 'black',
    fontFamily: 'Monsterrat',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 80,
    fontFamily: FONTS.BOLD,
  },
  login: {
    textAlign: 'center',
    paddingTop: 15,
    marginBottom:60,

    color: 'black',
  },
  mail: {
    fontSize: 21,
    color: 'black',
    marginTop: 50,
    marginBottom: 6,
    fontFamily: FONTS.SemiBold,
  },
  input: {
    height: 50,
    color: 'black',
    fontSize: 16,
    borderWidth: 1,
    marginTop: 1,
    paddingStart:5,
    borderRadius:10,
    minWidth: 302,
    minHeight: 40,
    marginVertical:25,
    fontFamily: FONTS.SemiBold,
  },
  forgot: {
    color: 'black',
    marginLeft: 'auto',
    paddingRight: 8,
    fontFamily: FONTS.SemiBold,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  navigate: {
    color: 'black',

    paddingStart: 5,
    fontFamily: FONTS.SemiBold,
  },
  recovery: {
    color: 'black',
    paddingTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.8,
  },

  LinkContainer: {
    paddingLeft: 12,
    fontFamily: FONTS.SemiBold,
    color: 'black',
  },
  imageContainer: {
    marginBottom: 5,
  },
  already: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  haveAccount: {
    color: 'black',
    fontFamily: FONTS.SemiBold,
  },
  img: {
    height: 48,
    width: 48,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  containerGoole: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'black',
  },
  signInButton: {
    width: 310,
    height: 48,
  },
});
