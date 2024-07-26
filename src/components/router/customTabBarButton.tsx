import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

const CustomTabBarButton: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={require('../../assets/images/CustomTab.png')} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBarButton;
