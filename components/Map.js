import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'

import tw from 'tailwind-react-native-classnames'
import MapViewDirections from 'react-native-maps-directions'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  console.log({ origin, destination })
  const mapRef = useRef(null)

  useEffect(() => {
    if (origin === null || destination === null) return
    // zoom to the mrakers //
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    })
  }, [origin, destination])
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          // lineDashPattern={[1]}
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor='black'
          strokeWidth={3}
        />
      )}
      {origin && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title={'origin'}
          description={origin.description}
          identifier='origin'
        />
      )}
      {origin && destination && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title={'destination'}
          description={destination.description}
          identifier='destination'
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})
