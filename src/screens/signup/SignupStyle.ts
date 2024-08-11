import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 25,
    color: 'black',
    marginBottom:120
  },
  heading: {
    color: 'black',
    fontSize: 20,
    marginTop: 50,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
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
    marginVertical:25,
    minHeight: 40,
  },
  forgot: {
    color: 'black',
    marginLeft: 'auto',
    paddingRight: 32,
    marginTop: 20,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  navigate: {
    color: 'black',
    paddingStart: 5,
    fontFamily: FONTS.SemiBold,
  },
 
  LinkContainer: {
    paddingLeft: 12,
    color: 'black',
    fontFamily: FONTS.SemiBold,
  },
  imageContainer: {
    marginBottom: 5,
  },
  already:{
    display:'flex',flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center'
  },
  haveAccount:{
    color:'black',
    fontFamily: FONTS.SemiBold,
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
  login:{
    textAlign: 'center',
    paddingTop: 15,
    marginBottom:60,

    color: 'black',
  }
});
