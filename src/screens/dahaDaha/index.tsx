import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../../theme/colors';

const DahaDaha: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}> DahaDaha </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.White
  },
});

export default DahaDaha;
