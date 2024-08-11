import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const DetialsStyle = StyleSheet.create({
  MainConaier: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  ImgView: {
    alignSelf: 'center',
    height: 330,
  },
  InfoContainer: {
    width: 360,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  InfoHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  InfoText: {
    color: 'black',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    fontWeight: 'bold',
  },
  InfoSub: {
    color: 'black',
    fontSize: 14,
  },

  detailsInfo: {
    display: 'flex',
    flexDirection: 'row',
  },

  locaiton: {
    display: 'flex',
    paddingTop: 10,
    paddingStart: 20,

    flexDirection: 'row',
  },
  loc: {
    fontSize: 11,
    textTransform: 'capitalize',
    color: 'black',
    paddingLeft: 6,
  },
  MainInfo: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  discription: {
    fontFamily: FONTS.REGULER,
    fontSize: 13,
    color: 'black',
  },
  DisContainer: {
    paddingHorizontal: 18,
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  readMore: {
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    width: 321,
    height: 56,
  },
  btnsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
