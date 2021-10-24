import React from 'react'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

// data //
import { data } from '../Data/NavOptions'

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pt-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              source={{
                uri: item.image,
              }}
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type='antdesign'
            name='arrowright'
            color='white'
          />
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
