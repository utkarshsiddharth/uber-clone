import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet } from 'react-native'
import { store } from './store'
import HomeScreen from './screen/HomeScreen'

import { SafeAreaProvider } from 'react-native-safe-area-context'

// setup redux - done

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
