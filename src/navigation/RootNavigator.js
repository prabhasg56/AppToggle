import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './StackRoutes';
;

export default function RootNavigator({ isLoggedIn }) {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
