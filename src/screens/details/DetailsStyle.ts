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
    paddingHorizontal: 20,
  },
  InfoHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InfoText: {
    color: 'black',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    top: 20,
    width: 20,
    height: 20,
    left: 30,
  },
  InfoSub: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  img: {width: 380, height: 380},
  detailsInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  heart:{
    width: 125,
    height: 23,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  disc:{
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 40,
  },
  map:{
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
  mapBox:{
    width: '100%',
    height: 100,
    backgroundColor: 'black',
    borderRadius: 12,
    marginBottom: 196,
  },

  locaiton: {
    display: 'flex',
    paddingTop: 10,

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
  },
  discription: {
    fontFamily: FONTS.REGULER,
    fontSize: 13,
    color: 'black',
  },
  DisContainer: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  readMore: {
    textDecorationLine: 'underline',
  },
});
