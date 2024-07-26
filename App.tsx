import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {StatusBar, Platform} from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {Platform.OS === 'android' && (
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
        )}
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
