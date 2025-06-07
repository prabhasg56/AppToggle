import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/profile/Header';


export default function ProfileScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Header username="Prabhas" navigation={navigation} />
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
