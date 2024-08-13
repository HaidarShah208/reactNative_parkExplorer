import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styleHome } from '../../screens/home/HomeStyle';

interface Park {
  name: string;
  images: { url: string }[];
}

interface CategoryListProps {
  parks: Park[];
  onParkSelect: (park: Park) => void;  
}

const CategoryList: React.FC<CategoryListProps> = ({ parks, onParkSelect }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {parks.map((park, index) => (
        <TouchableOpacity key={index} onPress={() => onParkSelect(park)}>
          <View style={{ borderRadius: 10, marginEnd: 10, overflow: 'hidden' }}>
            <ImageBackground
              style={styleHome.homebgImg}
              source={{ uri: park.images[0]?.url }}>
              <Text style={styleHome.homeimgText}>{park.name}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryList;
