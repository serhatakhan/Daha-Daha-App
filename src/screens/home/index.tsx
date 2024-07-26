import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from './styles'
import BrandList from '../../components/home/brandList';
import {useDispatch, useSelector} from 'react-redux';
import {getTagList} from '../../store/actions/tagListActions';
import {AppDispatch} from '../../store';
import Slider from '../../components/home/slider';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {width} from '../../utils/constants';
import {getPromotionsList} from '../../store/actions/promotionsActions';
import {selectTagListAndPromotions} from '../../utils/functions';

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {tagList, promotions} = useSelector(selectTagListAndPromotions);
  const dispatch = useDispatch<AppDispatch>();

  const renderPagination = () => (
    <Pagination
      dotsLength={promotions.promotions.length}
      activeDotIndex={activeIndex}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.paginationDot}
      inactiveDotStyle={styles.paginationInactiveDot}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
    />
  );

  useEffect(() => {
    dispatch(getTagList());
    dispatch(getPromotionsList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          horizontal
          data={tagList.tagList}
          renderItem={({item}) => (
            <BrandList image={item.IconUrl} name={item.Name} />
          )}
        />
      </View>

      <View style={styles.carousel}>
        <Carousel
          data={promotions.promotions}
          renderItem={({item}) => <Slider item={item} />}
          firstItem={0}
          inactiveSlideOpacity={0.9}
          sliderWidth={width}
          itemWidth={width * 0.775}
          onSnapToItem={index => setActiveIndex(index)}
        />
        {renderPagination()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
