import ForgetPassword from '../../screens/forgotPassword/ForgetPossword';
import Login from '../../screens/login/Login';
import {
  AUTH_STACK_SCREEN,
  BOTTOM_TAB_SCREENS,
  PROFILE_STACK_SCREEN,
} from '../navigationScreenNames/NavigationScreenNames';
import {IMAGES} from '../assets/images';
import Profile from '../../screens/profile/Profile';
import DetailsNavigation, {
  DetailsNavigations,
} from '../../navigation/tabNavigation/DetailsNavigation';
import {View} from 'react-native';
import {navs} from '../../styles/TabNavigation';
import DrawerNavigation from '../../navigation/drawerNavigation/DrawerNavigation';
import Signup from '../../screens/signup/Signup';
import Calendar from '../../screens/calendar/Calendar';
import EditProfileScreen from '../../screens/profile/EditProfile';
import ProfileStackNavigation from '../../navigation/stackNavigation/profileNavigation';

export const AUTH_STACK_NAVIGATION_SCREEN = [
  {name: AUTH_STACK_SCREEN.SIGNUP, component: Signup},
  {name: AUTH_STACK_SCREEN.LOGIN, component: Login},
  {name: AUTH_STACK_SCREEN.FORGOT_PASSWORD, component: ForgetPassword},
];
export const PROFILE_STACK_NAVIGATION_SCREEN = [
  {name: PROFILE_STACK_SCREEN.PROFILE, component: Profile},
  {name: PROFILE_STACK_SCREEN.EDITPROFILE, component: EditProfileScreen},
];

export const BOTTOM_TAB_SCREENS_NAVIGATION = [
  {
    name: BOTTOM_TAB_SCREENS.HOME,

    component: DrawerNavigation,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <View
          style={[
            navs.tabIconContainer,
            focused ? navs.tabIconFocused : navs.tabIconUnfocused,
          ]}>
          {focused ? <IMAGES.focusHome /> : <IMAGES.homeBottom />}
        </View>
      ),
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.SEARCH,
    component: DetailsNavigation,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <View
          style={[
            navs.tabIconContainer,
            focused ? navs.tabIconFocused : navs.tabIconUnfocused,
          ]}>
          {focused ? <IMAGES.focusSearch /> : <IMAGES.searchBottom />}
        </View>
      ),
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.FAVORITE,
    component: DetailsNavigations,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <View
          style={[
            navs.tabIconContainer,
            focused ? navs.tabIconFocused : navs.tabIconUnfocused,
          ]}>
          {focused ? <IMAGES.focusHeart /> : <IMAGES.favouriteBottom />}
        </View>
      ),
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.CALENDAR,
    component: Calendar,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <View
          style={[
            navs.tabIconContainer,
            focused ? navs.tabIconFocused : navs.tabIconUnfocused,
          ]}>
          {focused ? <IMAGES.calendar /> : <IMAGES.calendar />}
        </View>
      ),
    },
  },
  {
    name: BOTTOM_TAB_SCREENS.PROFILE,
    component: ProfileStackNavigation,
    options: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <View
          style={[
            navs.tabIconContainer,
            focused ? navs.tabIconFocused : navs.tabIconUnfocused,
          ]}>
          {focused ? <IMAGES.focusProfile /> : <IMAGES.userBottom />}
        </View>
      ),
    },
  },
];
