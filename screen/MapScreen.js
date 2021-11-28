import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// tailwind //
import tw from 'tailwind-react-native-classnames'

// components //
import Map from '../components/Map.js'
import NavigationCard from '../components/NavigationCard.js'
import RideOptions from '../components/RideOptions'
import { ScrollView } from 'react-native-gesture-handler'
const MapScreen = () => {
  const Stack = createStackNavigator()
  return (
    <View style={tw`py-4`}>
      <Text>Here's the map!!</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigationCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RideOptions'
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
