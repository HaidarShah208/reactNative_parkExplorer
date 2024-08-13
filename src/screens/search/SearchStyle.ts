import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  inputs: {
    marginTop: 60,
    width: 310,
    marginLeft: 22,
    height: 48,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    position: 'absolute',
    color: '#101C1D',
    opacity: 1,
    paddingStart: 40,
  },
  main: {
    flexDirection: 'row',
  },
  image: {
    width: 1,
    height: 0,
    position: 'relative',
    top: 70,
    left: 30,
    zIndex: 1,
    padding: 0,
  },
});
