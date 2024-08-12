import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleHome} from './HomeStyle';
import {DrawerActions} from '@react-navigation/native';
import {HOME} from '../../constants/assets/images';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../constants/allTypes/allTypes';
import useHome from './useHome';
import {styles} from '../signup/SignupStyle';
import {searchSt} from '../search/SearchStyle';
import {states} from '../../constants/states/states';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchParks} from '../../store/slice/parkSlice';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const {
    navigations,
    donationDataHorizontal,
    donationDataVertical,
    currentUser,
    setSearchInput,
  } = useHome();
  const dispatch = useDispatch();
  const {data,loading, error} = useSelector((state: RootState) => state.parks);
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };
  const [selectedState, setSelectedState] = useState('AK');
  useEffect(() => {
    dispatch(fetchParks({stateCode: selectedState}));
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
            states.map((state, index) => (
              <TouchableOpacity key={index}>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>{state.name}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleHome.scrollImage}>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : data.data.data.length === 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styleHome.notAvail}>This Pet is not available</Text>
            </View>
          ) : (
            data.data.data.map((park, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  /* Handle navigation or action */
                }}>
                <View
                  style={{borderRadius: 10, marginEnd: 10, overflow: 'hidden'}}>
                  <ImageBackground
                    style={styleHome.homebgImg}
                    source={{uri: park.images[0]?.url}}>
                    <Text style={styleHome.homeimgText}>{park.name}</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
      <View style={styleHome.homeImgContainer}>
        <Text style={styleHome.homeHeading}>Papulor designation</Text>
        <Text style={styleHome.viewall}>View all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {data.data.data.map((park, index) => (
            <View
              style={{
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
              }}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
                source={{uri: park.images[0]?.url}}
              />
              <View style={{marginStart: 15}}>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
                  {park.fullName}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 4,
                  }}>
                  <HOME.Locator width={10} style={{marginTop:5}} height={10}/>

                  <Text style={{paddingStart: 3,fontSize:12, color: '#959595'}}>
                    {park.states}
                  </Text>
                </View>
                <Text style={{paddingEnd: 4,fontSize:10, color: '#959595'}}>
                  {park.description.length > 15
                    ? `${park.description.substring(0, 80)}...`  
                    : park.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
