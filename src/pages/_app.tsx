import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

import { GlobalStyles } from '../styles/global'
import { darkTheme } from '../styles/themes/dark'

const themes = {
  dark: darkTheme,
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
