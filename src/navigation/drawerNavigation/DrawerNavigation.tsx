import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourite from '../../screens/favourite/Favourite';
import SideMenue from './SideMenue';
import {drawarSide} from '../../styles/DrawarSideMenue';
import {HomeDetailsNavigations} from '../tabNavigation/DetailsNavigation';

export type RootDrawerParamsList = {
  Home: undefined;
  Messsage: undefined;
  MyDonations: undefined;
  tabNavigator: undefined;
  Favourite: undefined;
  donateScren: undefined;
  AddPet: undefined;
  Request: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: drawarSide.Items}}
      drawerContent={props => <SideMenue {...props} />}>
      <Drawer.Screen name="Home" component={HomeDetailsNavigations} />
      <Drawer.Screen name="Favourite" component={Favourite} />
    </Drawer.Navigator>
  );
}
