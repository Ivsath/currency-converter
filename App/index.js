import React from 'react'

import Navigation from './config/Navigation'
import { ConversionProvider } from './utils/ConversionContext'
import { api } from './utils/api'

api('/latest?base=USD')
  .then((res) => console.log(res))
  .catch((err) => console.log('err', err))

export default () => (
  <ConversionProvider>
    <Navigation />
  </ConversionProvider>
)
