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
  MainContainer: {
    marginTop: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainImg: {
    left: 20,
    width: 94,
    height: 141,
    borderRadius: 25,
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
