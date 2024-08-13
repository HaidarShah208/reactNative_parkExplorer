import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HOME } from '../../constants/assets/images';
import { styleHome } from '../../screens/home/HomeStyle';

interface State {
  code: string;
  name: string;
}

interface StatesListProps {
  states: State[];
  selectedState: string;
  onStateClick: (stateCode: string) => void;
}

const StatesList: React.FC<StatesListProps> = ({ states, selectedState, onStateClick }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {states.map((state, index) => (
        <TouchableOpacity key={index} onPress={() => onStateClick(state.code)}>
          <View
            style={[
              styleHome.locator,
              selectedState === state.code ? styleHome.selectedState : null,
            ]}>
            <HOME.Locator />
            <Text style={styleHome.tsxt}>{state.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StatesList;
