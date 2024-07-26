import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Pressable,
  Image,
} from 'react-native';
import {Colors} from '../../theme/colors';
import styles from "./styles"
import {DetailProps} from '../../models/detail/detailTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getPromotionById} from '../../store/actions/singlePromotionsActions';
import {removePromotion} from '../../store/slice/singlePromotionSlice';
import Spinner from '../../components/spinner/spinner';
import {
  calculateRemainingDays,
  removeHtmlTagsAndEntities,
} from '../../utils/functions';
import BackSvg from '../../assets/svg/BackSvg';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Detail: React.FC<DetailProps> = ({route}) => {
  const {id} = route?.params;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {promotion, loading} = useSelector(
    (state: RootState) => state.singlePromotion,
  );

  // kalan gün
  const remainingDays = promotion
    ? calculateRemainingDays(promotion.RemainingText)
    : 0;

  useEffect(() => {
    dispatch(getPromotionById(id));
    return () => {
      dispatch(removePromotion());
    };
  }, [id, dispatch]);

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <Spinner color={Colors.Primary} size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => navigation.goBack()} style={styles.goBack}>
            <BackSvg />
          </Pressable>
        </SafeAreaView>

        <View style={{position: 'relative'}}>
          <View style={styles.imageContainer}>
          {promotion?.ImageUrl ? (
              <Image source={{uri: promotion.ImageUrl}} style={styles.image} />
            ) : (
              <Image source={require('../../assets/images/defaultPic.png')} style={styles.image} />
            )}
          </View>
          <View
            style={[
              styles.brandCircle,
              promotion && {backgroundColor: promotion.BrandIconColor},
            ]}>
           {promotion?.BrandIconUrl ? (
              <Image
                source={{uri: promotion.BrandIconUrl}}
                style={styles.brandIcon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../../assets/images/burger.png')}
                style={styles.brandIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>
              son <Text style={styles.textSpan}>{remainingDays}</Text> gün
            </Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {promotion?.Title
              ? removeHtmlTagsAndEntities(promotion?.Title)
              : ''}
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>
            {promotion?.Description
              ? removeHtmlTagsAndEntities(promotion?.Description) + '\n\n'
              : ''}
            {promotion?.PromotionDetailItemAreas?.map((item, index) => (
              <Text key={index} style={styles.descriptionTitle}>
                {item?.Description
                  ? removeHtmlTagsAndEntities(item?.Description) + '\n\n'
                  : ''}
              </Text>
            ))}
          </Text>
        </View>
      </ScrollView>

      <LinearGradient
        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,1)']}
        style={styles.gradient}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}>
        <SafeAreaView style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {removeHtmlTagsAndEntities(promotion?.BrandPromotionCardParticipationText || "Hemen Katıl")}
            </Text>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default Detail;
