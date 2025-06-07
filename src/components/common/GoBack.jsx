import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { lightColor } from '../../styles/GlobalStyles';

const GoBack = ({
  title = '',
  showIcon = true,
  onPress,
  iconColor = 'white',
  titleColor = 'white',
  iconSize = 20,
  backgroundColor = lightColor,
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
          <AntDesign name="arrowleft" size={iconSize} color={iconColor} />
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
