import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingText from '../../components/home/HeadingText'

const VideoLibraryScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HeadingText text='VideoLibraryScreen' />
    </View>
  )
}

export default VideoLibraryScreen

const styles = StyleSheet.create({})