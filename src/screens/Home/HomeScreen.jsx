import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'

const HomeScreen = () => {
  return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <HeadingText text='HomeScreen' />
     </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})