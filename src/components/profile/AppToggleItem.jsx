import React from 'react';
import { View, Text, StyleSheet, Switch, Image } from 'react-native';
import { lightColor, primaryColor } from '../../styles/GlobalStyles';

const AppToggleItem = ({ item, onToggle }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.app_icon }} style={styles.icon} />
    <Text style={styles.label}>{item.app_name}</Text>
    <Switch
      value={item.is_enable}
      onValueChange={onToggle}
      trackColor={{ false: "gray", true: "#b1e7c4" }}
      thumbColor={item.is_enable ? primaryColor : '#f2f2f2'}
    />
  </View>
);

export default AppToggleItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
});