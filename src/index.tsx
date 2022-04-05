import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme/theme'
import { GlobalStyles } from './styles/global'

import AppRoutes from './routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
