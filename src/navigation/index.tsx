import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationContainerRef,
} from '@react-navigation/native';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

import AuthenticationStack from './AuthenticationStack';
import TabBarStack from './TabbarStack';

export default function Navigation(): React.ReactElement {
  const routeNameRef = React.useRef<string>();
  const navigationRef = React.createRef<NavigationContainerRef>();
  const { theme } = useTheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={(): void => {
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName;
      }}
      onStateChange={(): void => {
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}
      theme={theme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {true ? <TabBarStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}
