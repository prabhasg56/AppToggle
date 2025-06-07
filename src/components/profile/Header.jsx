import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { lightColor } from '../../styles/GlobalStyles';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Header({ username }) {
    
    return (
        <SafeAreaView style={styles.header}>
            
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/150?img=18" }}
                    style={styles.profileIcon}
                />
                <Text style={styles.name}>{username}</Text>
            </View>

          <Entypo name="chevron-right" size={18} color={"#000"} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 16,
        backgroundColor: "#e8f1c1",
        height: 60,
        paddingHorizontal: 12,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E6F0E6'
    },
    name: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#000'
    },

});
