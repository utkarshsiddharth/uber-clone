import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

// tailwind //
import tw from 'tailwind-react-native-classnames'

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 mt-5 mx-auto`}>
        <Text>Here's the map!!</Text>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
