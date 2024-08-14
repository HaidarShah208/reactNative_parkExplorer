import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {searchSt} from './FavouriteStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {FAVOURITE} from '../../constants/assets/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import useFavourite from './useFavourite';
import {BOTTOM_TAB_SCREENS} from '../../constants/navigationScreenNames/NavigationScreenNames';

interface FavrouriteScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}
export default function Favourite({navigation}: FavrouriteScreenProps) {
  const {favorites} = useFavourite();

  return (
    <View style={searchSt.container}>
      <View style={searchSt.header}>
        <Text style={searchSt.heading}>Favourite</Text>
        <FAVOURITE.ADD
          onPress={() =>
            navigation.navigate(BOTTOM_TAB_SCREENS.SEARCH, {screen: 'search'})
          }
        />
      </View>

      <ScrollView>
        {favorites.length == 0 ? (
          <>
            <Text style={searchSt.emptText}>
              Nothing in your wishlist &#128529;
            </Text>
            <TouchableOpacity
              style={searchSt.containers}
              onPress={() => navigation.navigate('home')}>
              <Text style={searchSt.main}>Go to Home</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={searchSt.favrouite}>
              {favorites.map(park => (
                <TouchableOpacity
                  key={park.id}
                  onPress={() =>
                    navigation.navigate('details', {parkData: park} as any)
                  }>
                  <ImageBackground
                    style={searchSt.backgroundImg}
                    source={{uri: park.images[0]?.url}}>
                    <Text style={searchSt.name}>{park.fullName}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

function setImageUrl(url: string) {
  throw new Error('Function not implemented.');
}
