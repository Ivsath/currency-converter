import React from 'react'
import { StatusBar, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { RowItem, RowSeparator } from '../components/RowItem'
import colors from '../constants/colors'
import currencies from '../data/currencies.json'

const CurrencyList = ({ navigation }) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />
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
