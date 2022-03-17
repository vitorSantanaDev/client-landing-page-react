import React from 'react'
import ReactDOM from 'react-dom'

import Home from './templates/Home'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme/theme'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
