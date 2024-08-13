import {createDrawerNavigator} from '@react-navigation/drawer';
import SideMenue from './SideMenue';
import {drawarSide} from '../../styles/DrawarSideMenue';
import {HomeDetailsNavigations} from '../tabNavigation/DetailsNavigation';

export type RootDrawerParamsList = {
  Home: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: drawarSide.Items}}
      drawerContent={props => <SideMenue {...props} />}>
      <Drawer.Screen name="Home" component={HomeDetailsNavigations} />
    </Drawer.Navigator>
  );
}
