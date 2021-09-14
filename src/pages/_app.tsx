import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { AppProps, AppContext } from 'next/app'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { GlobalStyles } from '../styles/global'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'
import { Header } from '../components/header'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

interface CustomAppProps extends AppProps {
  storagedTheme: 'dark' | 'light'
}

const App = ({
  Component,
  pageProps,
  storagedTheme,
}: CustomAppProps): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState(storagedTheme)

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

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<any> => {
  let pageProps = {}
  let storagedTheme = 'dark'

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (ctx.req) {
    const { 'jonatan-portfolio:theme': theme } = parseCookies(ctx)

    storagedTheme = theme || 'dark'
  }

  console.log('bom dia', parseCookies(ctx))

  return {
    pageProps,
    storagedTheme,
  }
}

export default App
