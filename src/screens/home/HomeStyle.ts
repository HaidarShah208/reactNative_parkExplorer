import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/fonts';

export const styleHome = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 10,
  },
  tesxt: {
    color: '#101C1D',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 22,
    top: 15,
  },
  selectedState: {
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    color: 'white',
  },
  scrollImage: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'scroll',
    paddingLeft: 22,
  },

  tsxt: {
    color: 'black',
    textAlign: 'center',
    paddingStart: 6,
    paddingBottom: 4,
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
  },

  homeHeading: {
    paddingLeft: 22,
    fontSize: 18,
    color: 'black',
    fontFamily: FONTS.SemiBold,
    marginBottom: 20,
  },

  userImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  notAvail: {
    fontSize: 16,
    color: 'black',
    fontFamily: FONTS.SemiBold,
    alignSelf: 'center',
  },
  location: {
    paddingLeft: 5,
    color: 'black',
    textAlign: 'center',
  },
  locator: {
    backgroundColor: '#F7F7F9',
    paddingVertical: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    marginHorizontal: 4,
  },
  homebgImg: {width: 230, height: 150, borderRadius: 130},
  homeimgText: {
    color: 'white',
    position: 'absolute',
    bottom: 8,
    paddingStart: 10,
  },
  viewall: {
    fontSize: 10,
    color: 'black',
    paddingEnd: 15,
  },
  homeImgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  current: {display: 'flex', flexDirection: 'column'},
  loc: {display: 'flex', flexDirection: 'row'},
  defaultHome: {borderRadius: 30, width: 48, height: 48},
  center: {justifyContent: 'center', alignItems: 'center'},
});
