import {Dimensions} from 'react-native';

interface DimensionsType {
  width: number;
  height: number;
}

const {width, height}: DimensionsType = Dimensions.get('window');

export {width, height};
