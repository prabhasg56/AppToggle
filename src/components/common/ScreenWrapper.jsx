import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ScreenWrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})