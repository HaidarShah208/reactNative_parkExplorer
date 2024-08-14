import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/profile/Profile';
import {PROFILE_STACK_SCREEN} from '../../constants/navigationScreenNames/NavigationScreenNames';
import EditProfileScreen from '../../screens/profile/EditProfile';

export type ProfileStackParamsList = {
  PROFILE: undefined;
  EDITPROFILE: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamsList>();

export default function ProfileStackNavigation() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_STACK_SCREEN.PROFILE as keyof ProfileStackParamsList}
        component={Profile}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name={PROFILE_STACK_SCREEN.EDITPROFILE as keyof ProfileStackParamsList}
        component={EditProfileScreen}
        options={{title: 'Edit Profile', headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
}
