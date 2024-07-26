import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from '../../styles/sliderStyles';
import {
  calculateRemainingDays,
  removeHtmlTagsAndEntities,
} from '../../utils/functions';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NavigationParamList, SliderProps} from '../../models/home/sliderTypes';

const Slider: React.FC<SliderProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp<NavigationParamList>>();

  // Kalan gün sayısını hesapla
  const remainingDays = item.RemainingText
    ? calculateRemainingDays(item.RemainingText)
    : 0;

  const handlePress = () => {
    if (item.Id !== undefined) {
      navigation.navigate('DETAIL_SCREEN', {id: item.Id});
    } else {
      console.warn('Item ID is undefined');
    }
  };

  return (
    <Pressable style={styles.carouselArea} onPress={handlePress}>
      <View style={styles.carouselContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.ImageUrl,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={[
            styles.brandCircle,
            item && {backgroundColor: item.BrandIconColor},
          ]}>
          <Image
            source={{
              uri: item.BrandIconUrl,
            }}
            style={styles.brandIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>
            son <Text style={styles.textSpan}>{remainingDays}</Text> gün
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {item.Title ? removeHtmlTagsAndEntities(item.Title) : ''}
          </Text>
        </View>

        <Text
          style={[
            styles.daha,
            item && {color: item.ListButtonTextBackGroudColor},
          ]}>
          {item.ListButtonText
            ? removeHtmlTagsAndEntities(item.ListButtonText)
            : ''}
        </Text>
      </View>

      <View
        style={[
          styles.rotateContainer,
          item && {backgroundColor: item.PromotionCardColor},
        ]}></View>
    </Pressable>
  );
};

export default Slider;
