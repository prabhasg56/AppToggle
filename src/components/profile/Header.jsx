import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { lightColor, primaryColor } from '../../styles/GlobalStyles';
import GoBack from '../common/GoBack';
import { avatar } from '../../assets/index.js'; 

export default function Header({ username }) {
  const [imageError, setImageError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />

      <View style={styles.header}>
        <Image
          source={
            imageError
              ? avatar // fallback local image
              : { uri: 'https://i.pravatar.cc/150?img=12' }
          }
          style={styles.avatar}
          onError={() => setImageError(true)}
        />
        <Text style={styles.name}>{username}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Connected</Text>
          <AntDesign name="checkcircle" size={18} color={primaryColor} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: primaryColor,
    },
    header: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
        backgroundColor:'#fff'
    },
    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    statusContainer: {
        marginTop: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 12,
        flexDirection:'row',
        gap:8,
        alignItems:"center"
    },
    statusText: {
        color: '#666666',
        fontWeight: 'bold',
    },
});
