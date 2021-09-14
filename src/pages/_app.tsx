import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { GlobalStyles } from '../styles/global'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'
import { Header } from '../components/header'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    const { 'jonatan-portfolio:theme': theme } = parseCookies()

    if (!themes?.[theme]) {
      return
    }

    setCurrentTheme(theme)
  }, [])

  const toggleTheme = () =>
    setCurrentTheme((oldTheme) => {
      const newTheme = oldTheme === 'light' ? 'dark' : 'light'

      destroyCookie(null, 'jonatan-portfolio:theme')

      setCookie(null, 'jonatan-portfolio:theme', newTheme, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      return newTheme
    })

  return (
    <>
      <ThemeProvider theme={themes?.[currentTheme] || themes.dark}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
