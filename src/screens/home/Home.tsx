import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styleHome} from './HomeStyle';
import {DrawerActions} from '@react-navigation/native';
import {HOME, IMAGES} from '../../constants/assets/images';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../constants/allTypes/allTypes';
import useHome from './useHome';
import {styles} from '../signup/SignupStyle';
import {searchSt} from '../search/SearchStyle';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'home'>;
}

export default function Home({navigation}: HomeScreenProps) {
  const {
    navigations,
    donationDataHorizontal,
    donationDataVertical,
    loading,
    currentUser,
    setSearchInput,
  } = useHome();

  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

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
              <Text style={styleHome.notAvail}>This Pet is not available</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator   />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleHome.locator}>
                  <HOME.Locator />
                  <Text style={styleHome.tsxt}>Park</Text>
                </View>
              </TouchableOpacity>
            </>
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
          ) : donationDataHorizontal?.length === 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styleHome.notAvail}>This Pet is not available</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity>
                <View
                  style={{borderRadius: 10, marginEnd: 10, overflow: 'hidden'}}>
                  <ImageBackground
                    style={styleHome.homebgImg}
                    source={require('../../assets/img.png')}>
                    <Text style={styleHome.homeimgText}>new</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                  <ImageBackground
                    style={styleHome.homebgImg}
                    source={require('../../assets/img.png')}>
                    <Text style={styleHome.homeimgText}>new</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </View>
      <View style={styleHome.homeImgContainer}>
        <Text style={styleHome.homeHeading}>Papulor designation</Text>
        <Text style={styleHome.viewall}>View all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 330,
              height: 100,
              marginBottom:10,
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
              source={require('../../assets/img.png')}
            />
            <View style={{marginStart: 15}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',color:'black'}}>park now</Text>
              <View style={{display: 'flex', flexDirection: 'row',paddingVertical:4}}>
                <HOME.Locator />

                <Text style={{paddingStart:3,color:'#959595'}}>park now</Text>
              </View>
                <Text style={{paddingEnd:4,color:'#959595'}}>;lajdfl;ajsdldfjkdasljkdfaljksd;ldajks;ljkdfalskjdflkajs;lfjkda;lsjkd;flajsldfjka;lsjkdflajkslkfjal</Text>
            </View>
          </View>
          <View
            style={{
              width: 330,
              height: 100,
              marginBottom:15,
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
              source={require('../../assets/img.png')}
            />
            <View style={{marginStart: 15}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',color:'black'}}>park now</Text>
              <View style={{display: 'flex', flexDirection: 'row',paddingVertical:4}}>
                <HOME.Locator />

                <Text style={{paddingStart:3,color:'#959595'}}>park now</Text>
              </View>
                <Text style={{paddingEnd:4,color:'#959595'}}>;lajdfl;ajsdldfjkdasljkdfaljksd;ldajks;ljkdfalskjdflkajs;lfjkda;lsjkd;flajsldfjka;lsjkdflajkslkfjal</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
