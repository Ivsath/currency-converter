import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native'
import { format } from 'date-fns'

import { ConversionInput } from '../components/ConversionInput'
import { Button } from '../components/Button'
import colors from '../constants/colors'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  },
})

const Home = () => {
  const [scrollEnabled, setScrollEnabled] = useState('false')

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true)
    })

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false)
    })

    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  const baseCurrency = 'USD'
  const quoteCurrency = 'GBP'
  const conversionRate = 0.8345
  const date = new Date()

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/background.png')}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert('todo!')}
            onChange={(text) => console.log('text', text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() => alert('todo!')}
            onChange={(text) => console.log('text', text)}
            keyboardType="numeric"
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              'MMMM dd, yyyy',
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => alert('todo!')} />
          <View style={{ height: screen.height * 0.5 }} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
