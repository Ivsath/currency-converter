import React, { useState, useContext } from 'react'

const ConversionContext = React.createContext()

export const ConversionProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [quoteCurrency, setQuoteCurrency] = useState('GBP')

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency)
    setQuoteCurrency(baseCurrency)
  }

  const value = {
    baseCurrency,
    quoteCurrency,
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
  const { baseCurrency, quoteCurrency } = useContext(ConversionContext)
  return {
    baseCurrency,
    quoteCurrency,
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
