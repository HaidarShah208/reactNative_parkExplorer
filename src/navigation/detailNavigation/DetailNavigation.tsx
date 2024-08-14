import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamsDetailsList = {
  mydonation: undefined;
  details: undefined;
  Add_Pet: undefined;
};
const Stack = createStackNavigator<RootStackParamsDetailsList>();
