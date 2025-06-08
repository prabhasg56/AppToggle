import React from 'react';
import { View, Text } from 'react-native';

const EmptyList = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 16, color: '#595959' }}>No apps found</Text>
    </View>
  );
};

export default EmptyList;
