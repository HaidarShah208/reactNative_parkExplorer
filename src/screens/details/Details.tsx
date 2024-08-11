import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  FAVOURITE,
  HOME,
  IMAGES,
  SrchIMAGES,
} from '../../constants/assets/images';
import Button from '../../components/button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/detailNavigation/DetailNavigation';
import {styleHome} from '../home/HomeStyle';
import useDetails from './useDetails';
import {RouteProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {DetialsStyle} from './DetailsStyle';

interface DetailsProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'details'>;
  route: RouteProp<RootStackParamsDetailsList, 'details'>;
  isMyDonation: boolean;
}
export default function Details({navigation, route}: DetailsProps) {
  const {
    userData,
    donationData,
    handleAdoptNow,
    isFavorite,
    handleDeleteClick,
  } = useDetails({
    route,
  });
  const isMyDonation = route.params?.isMyDonation;

  return (
    <ScrollView>
      <View style={DetialsStyle.MainConaier}>
        <View style={DetialsStyle.ImgView}>
          <Image
            source={{uri: donationData.imageURL}}
            style={{width: 380, height: 380}}
          />
          <IMAGES.DetailBack
            style={{
              position: 'absolute',
              top: 20,
              width: 20,
              height: 20,
              left: 30,
            }}
            onPress={() => navigation.goBack()}
          />
          {isFavorite && (
            <SrchIMAGES.Heart
              style={{
                position: 'absolute',
                top: 30,
                width: 25,
                height: 23,
                left: 330,
              }}
            />
          )}
          {isMyDonation && (
            <FAVOURITE.Delete
              style={{
                position: 'absolute',
                top: 30,
                width: 25,
                height: 23,
                left: 330,
              }}
              onPress={() => handleDeleteClick(donationData)}
            />
          )}
        </View>
        <View style={DetialsStyle.InfoContainer}>
          <View style={DetialsStyle.InfoHeading}>
            <View>
              <Text style={DetialsStyle.InfoText}>{donationData.petBreed}</Text>
              <Text style={DetialsStyle.InfoSub}>{donationData.petType}</Text>
            </View>
            <View style={DetialsStyle.MainInfo}>
              <View style={DetialsStyle.detailsInfo}>
                {userData && userData.photoURL ? (
                  <Image
                    source={{uri: userData.photoURL}}
                    style={styleHome.userImage}
                  />
                ) : (
                  <HOME.DefaultHome
                    height={48}
                    width={48}
                    style={{borderRadius: 30}}
                  />
                )}
              </View>
            </View>
          </View>
      <View>

      <View style={DetialsStyle.locaiton}>
              <HOME.Locator width={15} height={15} />
              <Text style={DetialsStyle.loc}>{donationData.petLocation}</Text>
            </View>
      </View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600',
              paddingStart: 20,
              marginTop: 10,
            }}>
            About Discription
          </Text>
          <View style={DetialsStyle.DisContainer}>
            <Text style={DetialsStyle.discription}>
              {donationData.description}...
              <Text style={DetialsStyle.readMore}>Read more</Text>
            </Text>
          </View>
          <View style={DetialsStyle.btnsContainer}>
            <Button
              title={'Adopt Now'}
              buttonStyle={DetialsStyle.buttonStyle}
              onPress={handleAdoptNow}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
