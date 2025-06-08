import { BackHandler, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import HeadingText from '../../components/home/HeadingText'
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const [exitApp, setExitApp] = useState(0);


  const backAction = useCallback(() => {
      setExitApp(prevExitApp => {
          if (prevExitApp === 0) {
              ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
              setTimeout(() => {
                  setExitApp(0);
              }, 2000); // Reset after 2 seconds
              return 1; // Update state to track first press
          } else if (prevExitApp === 1) {
              BackHandler.exitApp();
          }
          return prevExitApp;
      });

      return true; // Prevent default back action
  }, []);

  useFocusEffect(
      useCallback(() => {
          const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              backAction
          );
          return () => backHandler.remove();
      }, [backAction])
  );
  
  return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <HeadingText text='HomeScreen' />
     </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})