import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const userStyle = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: 20,
    alignItems: 'center',
    padding: 30,
  },
  main: {
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    color: 'black',
    paddingVertical: 20,
    fontSize: 24,
    fontFamily: FONTS.BOLD,
  },
  mail: {
    fontSize: 21,
    color: 'black',
    fontWeight: '600',
    textAlign:'center',
    fontFamily: FONTS.SemiBold,
  },
  userEmail:{
    color:'#959595',
    textAlign:'center',

  },
 
  btnsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.BOLD,
    // width: 321,
    height: 64,
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileEdit: {
    position: 'relative',
    left: 89,
    bottom: 22,
  },
   button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAAE4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
  },
});
