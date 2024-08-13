import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HOME } from '../../constants/assets/images';
import { styleHome } from '../../screens/home/HomeStyle';  

interface CategoryListProps {
  parks: any[];  
  onParkSelect: (park: any) => void;  
}

const PapularParks: React.FC<CategoryListProps> = ({ parks, onParkSelect }) => {
  return (
    <View>
      {parks.map((park, index) => (
        <TouchableOpacity key={index} onPress={() => onParkSelect(park)}>
          <View
            style={{
              elevation: 3,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.3,
              width: 320,
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
              source={{ uri: park.images[0]?.url }}
            />
            <View style={{ marginStart: 15 }}>
              <Text
                style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>
                {park.fullName}
              </Text>
              <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 4 }}>
                <HOME.Locator width={10} style={{ marginTop: 3 }} height={10} />
                <Text style={{ paddingStart: 3, fontSize: 12, color: '#272727' }}>
                  {park?.addresses[0]?.city}
                </Text>
              </View>
              <Text style={{ paddingEnd: 4, fontSize: 10, color: '#959595' }}>
                {park.description.length > 15
                  ? `${park.description.substring(0, 80)}...`
                  : park.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PapularParks;
