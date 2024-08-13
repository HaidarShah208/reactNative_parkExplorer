import {StyleSheet} from 'react-native';

export const tabBarIconStyles = {
  width: 24,
  height: 24,
};

export const navs = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    height: 80,
    width: 'auto',
  },

  tabIconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  tabIconFocused: {
    backgroundColor: '#0D6EFD',
  },
  tabIconUnfocused: {
    backgroundColor: 'transparent',
  },
});
