import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {style} from './SearchStyle';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import useSearch from './useSearch';
import {TextInput} from 'react-native-gesture-handler';
import {IMAGES} from '../../constants/assets/images';

interface SearchScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}

const Search = ({navigation}: SearchScreenProps) => {
  const {onInputChange, searchTerm} = useSearch();

  return (
    <View>
      <View style={style.main}>
        <IMAGES.searchBottom style={style.image} />
        <TextInput
          placeholder="search"
          style={style.inputs}
          placeholderTextColor={'black'}
          onChangeText={onInputChange}
          value={searchTerm}
        />
      </View>
    </View>
  );
};

export default Search;
