import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {searchSt} from './FavouriteStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE, SrchIMAGES} from '../../constants/assets/images';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../constants/allTypes/allTypes';
import useFavourite from './useFavourite';

interface FavrouriteScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}
export default function Favourite({navigation}: FavrouriteScreenProps) {
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

  const {favoriteDonations, loading} = useFavourite();
  return (
    <View style={searchSt.container}>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD onPress={() => navigation.navigate('search')} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <ScrollView>
          {favoriteDonations.length === 0 ? (
            <>
              <Text style={searchSt.emptText}>
                Nothing in your wishlist &#128529;
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('search')}>
               <Text>
                Go to Search
                </Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text>
                Go to Search
                </Text>     
              </TouchableOpacity>
            </>
          ) : (
            favoriteDonations.map((donationItem: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMainContainerClick(donationItem)}>
                <View style={searchSt.MainContainer}>
                  <Image
                    source={{uri: donationItem.imageURL}}
                    style={searchSt.mainImg}
                  />
         
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
