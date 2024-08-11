import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {searchSt} from './SearchStyle';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {YourState} from '../../constants/allTypes/allTypes';
import useSearch from './useSearch';
import {TextInput} from 'react-native-gesture-handler';

interface SearchScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}

const Search = ({navigation}: SearchScreenProps) => {
  const handleMainContainerClick = (donationItem: YourState) => {
    navigation.navigate('details', {donationData: donationItem} as any);
  };

  const {
    donationData,
  
    onInputChange,
    searchTerm,
  } = useSearch();
  const uniquePetTypes = Array.from(
    new Set(donationData?.donations?.map(item => item.petType)),
  );

  
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="search"
          style={searchSt.inputs}
          placeholderTextColor={'black'}
          onChangeText={onInputChange}
          value={searchTerm}
        />
      </View>
    </View>
  );
};

export default Search;
