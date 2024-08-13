import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const searchSt = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    color: 'black',
    paddingBottom: 10,
  },
 
  containers: {
    alignSelf: 'center',
    marginTop: 10,
  },
  main: {
    width: 90,
    marginBottom: 10,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 52,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  emptText: {
    textAlign: 'center',
    fontFamily: FONTS.BOLD,
    color: '#101C1D',
    paddingTop: 40,
  },
  container: {
    marginBottom: 90,
  },
});
