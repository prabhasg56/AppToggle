import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HeadingText = ({
  text = '',
  textColor = '#000',
  textSize = 20,
  textAlign = 'left',
  style = {},
  numberOfLines = 1,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.heading,
          {
            color: textColor,
            fontSize: textSize,
            textAlign: textAlign,
          },
          style,
        ]}
        numberOfLines={numberOfLines}
      >
        {text}
      </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    marginBottom: 12,
  },
});
