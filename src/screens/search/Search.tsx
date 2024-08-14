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
import {StyleSheet} from 'react-native';

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
      <View
        style={{
          elevation: 3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
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
          source={{uri: item.images?.[0]?.url || 'default_image_url'}}
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        />
        <View style={{marginStart: 15}}>
          <Text style={{fontSize: 9, fontWeight: 'bold', color: 'black'}}>
            {item.fullName}
          </Text>
          <View
            style={{display: 'flex', flexDirection: 'row', paddingVertical: 4}}>
            <HOME.Locator width={10} style={{marginTop: 3}} height={10} />
            <Text style={{paddingStart: 3, fontSize: 12, color: '#272727'}}>
              {item?.addresses[0]?.city}
            </Text>
          </View>
          <Text
            style={{
              paddingEnd: 4,
              fontSize: 10,
              color: '#959595',
              flexWrap: 'wrap',
            }}>
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

      <View style={styles.scrollView}>
        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : searchResults.length === 0 && query.length > 0 ? (
          <Text style={styles.loadingText}>No results found</Text>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={styles.list}
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    padding: 10,
  },
  inputs: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 30,
  },
  list: {
    marginBottom: 10,
    padding: 10,
  },
  loadingText: {
    marginTop: 50,
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
  parkItem: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  parkImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  parkName: {
    fontSize: 16,
    color: '#333',
  },
});
