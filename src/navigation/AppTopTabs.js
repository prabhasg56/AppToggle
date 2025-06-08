import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';
import ApplicationTab from '../screens/Profile/ApplicationTab';
import SettingsTab from '../screens/Profile/SettingsTab';
import { primaryColor } from '../styles/GlobalStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();

export default function AppTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
          height: 3,
          width: SCREEN_WIDTH * 0.36, // ~36% of screen width
          left: SCREEN_WIDTH * 0.07, // aligns under each tab title
        },
        tabBarLabelStyle: {
          fontWeight: '900',
          textTransform: 'none',
          fontSize: SCREEN_WIDTH < 350 ? 12 : 14,
        },
        tabBarStyle: {
          backgroundColor: primaryColor,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarIndicatorContainerStyle: {
          marginHorizontal: SCREEN_WIDTH * 0.07,
        },
      }}
    >
      <Tab.Screen name="Applications" component={ApplicationTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
}
