import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../../screens/details/Details';

export type RootStackParamsDetailsList = {
  mydonation: undefined;
  details: undefined;
  Add_Pet: undefined;
};
const Stack = createStackNavigator<RootStackParamsDetailsList>();

 

 
