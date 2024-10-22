import React, { useState, useContext, useEffect } from 'react'
import { Alert } from 'react-native'

import { api } from './api'

const ConversionContext = React.createContext()

const DEFAULT_BASE_CURRENCY = 'USD'
const DEFAULT_QUOTE_CURRENCY = 'GBP'

export const ConversionProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY)
  const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY)
  const [date, setDate] = useState()
  const [rates, setRates] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const setBaseCurrency = (currency) => {
    setIsLoading(true)
    return api(`/latest?base=${currency}`)
      .then((res) => {
        _setBaseCurrency(currency)
        setDate(res.date)
        setRates(res.rates)
      })
      .catch((error) => {
        Alert.alert('Sorry, something went wrong.', error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency)
    setQuoteCurrency(baseCurrency)
  }

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY)
  }, [])

  const value = {
    baseCurrency,
    quoteCurrency,
    date,
    rates,
    isLoading,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
  }

  return (
    <ConversionContext.Provider value={value}>
      {children}
    </ConversionContext.Provider>
  )
}

export function useConversion() {
  const { baseCurrency, quoteCurrency, date, rates, isLoading } = useContext(
    ConversionContext,
  )

  return {
    baseCurrency,
    quoteCurrency,
    date,
    rates,
    isLoading,
  }
}

export function useConversionActions() {
  const { swapCurrencies, setBaseCurrency, setQuoteCurrency } = useContext(
    ConversionContext,
  )

  return {
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
  }
}
