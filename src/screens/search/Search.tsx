import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {style} from './SearchStyle';
import {RootStackParamsDetailsList} from '../../navigation/tabNavigation/DetailsNavigation';
import {TextInput} from 'react-native-gesture-handler';
import {HOME, IMAGES} from '../../constants/assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchSearchParks} from '../../store/slice/searchParksSlice';

interface SearchScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'search'>;
}

const Search = ({navigation}: SearchScreenProps) => {
  const [query, setQuery] = useState('');
  const [start, setStart] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const searchResults = useSelector(
    (state: RootState) => state.searchParks.data.data.data,
  );
  const totalResults = useSelector(
    (state: RootState) => state.searchParks.data.data.total,
  );
  const loading = useSelector((state: RootState) => state.searchParks.loading);

  const handleSearch = (text: string) => {
    setQuery(text);
    setStart(0);
    dispatch(fetchSearchParks({q: text, start: 0, limit: 10}));
  };

  const loadMoreParks = () => {
    const newStart = start + 10;
    setStart(newStart);
    dispatch(fetchSearchParks({q: query, start: newStart, limit: 10}));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('details', {parkData: item} as any)}>
      <View style={style.container}>
        <Image source={{uri: item.images?.[0]?.url}} style={style.img} />
        <View style={{marginStart: 15}}>
          <Text style={style.text}>{item.fullName}</Text>
          <View style={style.city}>
            <HOME.Locator width={10} style={{marginTop: 3}} height={10} />
            <Text style={style.cityName}>{item?.addresses[0]?.city}</Text>
          </View>
          <Text style={style.discription}>
            {item.description.length > 15
              ? `${item.description.substring(0, 80)}...`
              : item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View>
        <View style={style.main}>
          <IMAGES.searchBottom style={style.image} />
          <TextInput
            placeholder="search park"
            value={query}
            onChangeText={handleSearch}
            style={style.inputs}
            placeholderTextColor={'black'}
          />
        </View>
      </View>

      <View style={style.scrollView}>
        {loading ? (
          <Text style={style.loadingText}>Loading...</Text>
        ) : searchResults.length === 0 && query.length > 0 ? (
          <Text style={style.loadingText}>No results found</Text>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={style.list}
            ListFooterComponent={() =>
              searchResults.length > 0 &&
              searchResults.length < totalResults ? (
                <Button title="Load More" onPress={loadMoreParks} />
              ) : null
            }
          />
        )}
      </View>
    </>
  );
};

export default Search;

 
