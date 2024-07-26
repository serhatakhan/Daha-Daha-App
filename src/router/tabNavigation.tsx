import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DAHA_DAHA_SCREEN, HOME_SCREEN, WALLET_SCREEN} from '../utils/routes';
import Home from '../screens/home';
import Wallet from '../screens/wallet';
import DahaDaha from '../screens/dahaDaha';
import DiscoverTab from '../assets/svg/DiscoverTab';
import WalletTab from '../assets/svg/WalletTab';
import {Colors} from '../theme/colors';
import CustomTabBarButton from '../components/router/customTabBarButton';
import CustomTabBar from '../components/router/customTabBar';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.TabActive,
        tabBarInactiveTintColor: Colors.TabInactive,
      }}
      tabBar={props => <CustomTabBar {...props} />}
      >
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarIcon: ({color}) => <DiscoverTab color={color} />,
        }}
      />
      <Tab.Screen
        name={DAHA_DAHA_SCREEN}
        component={DahaDaha}
        options={{
          tabBarIcon: () => <CustomTabBarButton />,
          tabBarLabel: ""
        }}
      />
      <Tab.Screen
        name={WALLET_SCREEN}
        component={Wallet}
        options={{
          tabBarIcon: ({color}) => <WalletTab color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
