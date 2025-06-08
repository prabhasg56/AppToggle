import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { primaryColor } from '../../styles/GlobalStyles';

const GoBack = ({
  title = '',
  showIcon = true,
  onPress,
  iconColor = 'white',
  titleColor = 'white',
  iconSize = 20,
  backgroundColor = primaryColor,
  containerStyle = {},
  textStyle = {},
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      {showIcon && (
        <TouchableOpacity onPress={handlePress}>
          <Entypo name="chevron-left" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      )}
      {title ? (
        <Text style={[styles.titleText, { color: titleColor }, textStyle]}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 60,
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
