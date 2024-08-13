import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleHome} from './HomeStyle';
import {DrawerActions} from '@react-navigation/native';
import {HOME} from '../../constants/assets/images';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import useHome from './useHome';
import {styles} from '../signup/SignupStyle';
import {states} from '../../constants/states/states';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchParks} from '../../store/slice/parkSlice';
import PapularParks from '../../components/papularParks/PapularParks';
import StatesList from '../../components/stateLists/StatesLists';
import CategoryList from '../../components/categoryList/CategoryList';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const {navigations, donationDataHorizontal, currentUser} = useHome();
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state: RootState) => state.parks);

  const [selectedState, setSelectedState] = useState('AL');
  const handleStateClick = (stateCode: string) => {
    setSelectedState(stateCode);
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchParks({stateCode: selectedState}));
    };

    fetchData();
  }, [dispatch, selectedState]);
  return (
    <>
      <View style={styleHome.header}>
        <TouchableOpacity
          onPress={() => navigations.dispatch(DrawerActions.openDrawer())}>
          <HOME.NavImg />
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.haveAccount}>Current Location</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <HOME.Locator />
            <Text style={styleHome.location}>location here</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('user')}>
          {currentUser && currentUser.photoURL ? (
            <Image
              source={{uri: currentUser.photoURL}}
              style={styleHome.userImage}
            />
          ) : (
            <HOME.DefaultHome
              height={48}
              width={48}
              style={{borderRadius: 30}}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styleHome.tesxt}>States</Text>

      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleHome.scrollImage}>
          {loading ? (
              <ActivityIndicator size="large" color="black" />
          ) : donationDataHorizontal?.length === 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styleHome.notAvail}>This Park is not available</Text>
            </View>
          ) : (
            <StatesList
            states={states}  
            selectedState={selectedState} 
            onStateClick={handleStateClick} 
          />
          )}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleHome.scrollImage}>
            <CategoryList
            parks={data.data.data} 
            onParkSelect={(park) => navigation.navigate('details', { parkData: park } as any)}  
          />
        </ScrollView>
      </View>
      <View style={styleHome.homeImgContainer}>
        <Text style={styleHome.homeHeading}>Papulor designation</Text>
        <Text style={styleHome.viewall}>View all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
         <PapularParks 
          parks={data.data.data}  
          onParkSelect={(park) => navigation.navigate('details', { parkData: park } as any)}
         />
        </View>
      </ScrollView>
    </>
  );
}
