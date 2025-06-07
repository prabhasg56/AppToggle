import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'

const MyKitScreen = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <HeadingText text='MyKitScreen'/>
    </View>
  )
}

export default MyKitScreen

const styles = StyleSheet.create({})