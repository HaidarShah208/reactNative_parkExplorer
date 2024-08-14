import {View, Text, Image, TouchableOpacity} from 'react-native';
import {HOME} from '../../constants/assets/images';
import {style} from './style';

interface CategoryListProps {
  parks: any[];
  onParkSelect: (park: any) => void;
}

const PapularParks: React.FC<CategoryListProps> = ({parks, onParkSelect}) => {
  return (
    <View>
      {parks.map((park, index) => (
        <TouchableOpacity key={index} onPress={() => onParkSelect(park)}>
          <View style={style.main}>
            <Image style={style.img} source={{uri: park.images[0]?.url}} />
            <View style={{marginStart: 15}}>
              <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
                {park.fullName}
              </Text>
              <View style={style.container}>
                <HOME.Locator style={style.location} />
                <Text style={style.text}>{park?.addresses[0]?.city}</Text>
              </View>
              <Text style={style.discription}>
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
