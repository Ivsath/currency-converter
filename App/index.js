import React from 'react'

import Navigation from './config/Navigation'
import { ConversionProvider } from './utils/ConversionContext'

export default () => (
  <ConversionProvider>
    <Navigation />
  </ConversionProvider>
)
