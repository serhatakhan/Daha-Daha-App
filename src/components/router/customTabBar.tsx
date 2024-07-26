import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Colors} from '../../theme/colors';
import styles from '../../styles/customTabBarStyles';

const CustomTabBar: React.FC<BottomTabBarProps> = props => {
  const {state, descriptors, navigation} = props;

  return (
    <SafeAreaView
      style={[
        styles.tabBar,
        {paddingBottom: Platform.OS === 'android' ? 16 : 0}, // Android için ekstra padding
      ]}>
      <View style={styles.tabContent}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          // geçerli tab'ın seçili olup olmadığını kontrol et
          const isFocused = state.index === index;

          // tab'a tıklanma olayını işle, geçerli değilse tab'a yönlendir
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const iconColor = isFocused ? Colors.TabActive : Colors.TabInactive;

          //  tabBAr etiketlerini 2 durum içinde render eder, label özelliğinin türüne bağlı olarak tabBar etiketini nasıl render edeceğini belirler
          const renderLabel = () => {
            if (typeof label === 'function') {
              // Eğer label fonksiyon ise, fonksiyonu uygun props ile çağır
              return label({
                focused: isFocused,
                color: iconColor,
                position: 'below-icon', // Etiketin konumu
                children: route.name, // Etiket olarak gösterilmesi gereken metin
              });
            }
            // label string ise doğrudan döndür
            return typeof label === 'string' ? label : route.name;
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={typeof label === 'string' ? label : ''}
              onPress={onPress}
              style={styles.tabButton}>
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: iconColor,
                  size: 24,
                })}
              <Text style={[styles.tabLabel, {color: iconColor}]}>
                {renderLabel()}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomTabBar;
