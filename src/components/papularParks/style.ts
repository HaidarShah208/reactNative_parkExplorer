import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  main: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    width: 320,
    height: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  location: {
    width: 10,
    marginTop: 3,
    height: 10,
  },
  text: {paddingStart: 3, fontSize: 12, color: '#272727'},
  discription: {paddingEnd: 4, fontSize: 10, color: '#959595'},
});
