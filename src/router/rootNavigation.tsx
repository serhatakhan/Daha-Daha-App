import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';
import Detail from '../screens/detail';
import { NavigationParamList } from '../models/home/sliderTypes';

const Stack = createNativeStackNavigator<NavigationParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}>
      <Stack.Screen name="DAHA_DAHA" component={TabNavigation} />
      <Stack.Screen name="DETAIL_SCREEN" component={Detail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
