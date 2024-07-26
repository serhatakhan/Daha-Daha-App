import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

interface SpinnerProps {
  size?: 'small' | 'large';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'large', color = Colors.TabActive }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
