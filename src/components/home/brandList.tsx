import React, { useState } from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from '../../styles/brandListStyles';
import { BrandListProps } from '../../models/home/homeTypes';

const BrandList: React.FC<BrandListProps> = ({image, name}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <Pressable style={styles.container} onPress={() => setIsSelected(!isSelected)}>
      <View style={[styles.wrapper, isSelected && styles.selectedContainer]}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default BrandList;
