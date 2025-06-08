import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/profile/Header';
import AppTopTabs from '../../navigation/AppTopTabs';


export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header username="Prabhas" navigation={navigation} />
      <AppTopTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
