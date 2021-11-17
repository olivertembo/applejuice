import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import TabButton from './TabBarButton';
import AppColors from '../../constant/Colors';

const HiddenView = () => <View style={{ display: 'none' }} />;

const TabBar: React.FC<BottomTabBarProps<BottomTabBarOptions>> = ({
  navigation,
  state,
  descriptors,
}) => {
  const iconMap: Record<number, string> = {
    0: 'home',
    1: 'user-circle',
    2: 'bell',
    3: 'cog',
  };

  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'ios' ? styles.containerIos : styles.containerAndroid,
      ]}
    >
      {state.routes.map((route, index) => {
        if (index >= 4) {
          return <HiddenView key={index} />;
        }
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabButton
            isFocused={isFocused}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            Icon={
              <Icon
                name={iconMap[index]}
                color={isFocused ? '#E585AD' : AppColors.primaryColor}
                size={35}
              />
            }
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#FAFAFA',
  },
  containerIos: {
    paddingBottom: 30,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 1,
  },
  containerAndroid: {
    paddingTop: 2,
    paddingBottom: 10,
    elevation: 24,
  },
  button: {},
});

export default TabBar;
