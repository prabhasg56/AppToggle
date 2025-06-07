import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
    return <Text onPress={props.onPress} ellipsizeMode='tail' style={[styles.text, props.style, {}]}>{props.children}</Text>;
};

CustomText.defaultProps = {
    style: {},
    color: "gray",
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
};

const styles = StyleSheet.create({
    text: {
        color: CustomText.defaultProps.color,
        fontFamily: CustomText.defaultProps.fontFamily,
        fontSize: CustomText.defaultProps.fontSize,
    },
});

export default CustomText;