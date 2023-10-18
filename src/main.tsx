import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"

import App from './App.tsx'
import Theme from './styles/Theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
