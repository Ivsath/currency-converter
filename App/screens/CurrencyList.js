import React from 'react'
import { StatusBar, FlatList, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'

import { RowItem, RowSeparator } from '../components/RowItem'
import { useConversionActions } from '../utils/ConversionContext'
import colors from '../constants/colors'
import currencies from '../data/currencies.json'

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CurrencyList = ({ navigation, route = {} }) => {
  const { setBaseCurrency, setQuoteCurrency } = useConversionActions()
  const insets = useSafeAreaInsets()
  const params = route.params || {}

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item)
                } else {
                  setQuoteCurrency(item)
                }
                navigation.pop()
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          )
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  )
}

export default CurrencyList
