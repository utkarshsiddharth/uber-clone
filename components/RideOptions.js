import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'UberXL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'UberX',
    multiplier: 1.5,
    image: 'https://links.papareact.com/7pf',
  },
]

const RideOptions = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View
        style={tw`flex-row justify-between items-center pl-8 pr-32 bg-black`}
      >
        <TouchableOpacity
          style={tw`text-center `}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name='chevron-left' type='font-awesome' color='white' />
        </TouchableOpacity>
        <Text style={tw` text-center text-xl py-5 text-white`}>
          Select A Ride
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View>
              <Text>{item.title}</Text>
              <Text>Travel Time...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default RideOptions
