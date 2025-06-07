import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
