import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { primaryColor } from '../../styles/GlobalStyles';

const Loader = ({ size = 'large', color = primaryColor }) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
