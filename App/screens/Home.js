import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
})

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  )
}

export default Home
