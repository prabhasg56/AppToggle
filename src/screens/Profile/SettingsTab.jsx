import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16 },
});

export default SettingsTab;
