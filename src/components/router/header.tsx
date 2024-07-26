import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from '../../styles/headerStyles';
import LogoSvg from '../../assets/svg/LogoSvg';
import UserSvg from '../../assets/svg/UserSvg';
import UserDotSvg from '../../assets/svg/UserDot';

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <LogoSvg />
        <View style={{position: 'relative'}}>
          <UserSvg />
        </View>
        <View style={styles.dotContainer}>
          <UserDotSvg />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
