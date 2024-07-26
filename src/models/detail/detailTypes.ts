import {RouteProp} from '@react-navigation/native';
import {NavigationParamList} from '../home/sliderTypes';

// Detail bileşeni için route türünü belirle
type DetailScreenRouteProp = RouteProp<NavigationParamList, 'DETAIL_SCREEN'>;

type DetailProps = {
  route: DetailScreenRouteProp;
};

export type {DetailProps};
