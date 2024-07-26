import {Promotions} from '../slice/sliceTypes';

// Navigasyon parametreleri için tür tanımlaması
type NavigationParamList = {
  DAHA_DAHA_SCREEN: undefined;
  DAHA_DAHA: undefined;
  DETAIL_SCREEN: {id: number};
};

type SliderProps = {
  item: Promotions;
};

export type {NavigationParamList, SliderProps};
