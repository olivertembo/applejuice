import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabsParamList } from './type';
import HomeScreen from '../journey/dashboard/home';
import ProfileScreen from '../journey/dashboard/profile';
import NotificationScreen from '../journey/dashboard/notification';
import SettingScreen from '../journey/dashboard/setting';

import TabBar from '../components/Tabbar/TabBar';
import WelcomeScreen from '../journey/authentication/Welcome';
import AppColors from '../constant/Colors';

const Tab = createBottomTabNavigator<TabsParamList>();

const TabBarStack = (): React.ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName="WelcomeScreen"
      tabBar={(props) => <TabBar {...props} />}
      tabBarOptions={{
        activeTintColor: '#E585AD',
        inactiveTintColor: AppColors.primaryColor,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
        name="Notification"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={SettingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabBarStack;
