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
  container: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    width: 330,
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
  text: {fontSize: 9, fontWeight: 'bold', color: 'black'},
  city: {display: 'flex', flexDirection: 'row', paddingVertical: 4},
  cityName:{paddingStart: 3, fontSize: 12, color: '#272727'},
  discription:{
    paddingEnd: 4,
    fontSize: 10,
    color: '#959595',
    flexWrap: 'wrap',
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 30,
  },
  list: {
    marginBottom: 10,
    padding: 10,
  },
  loadingText: {
    marginTop: 50,
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
});
