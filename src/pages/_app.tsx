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
      <GlobalStyles />
      <ThemeProvider theme={themes.dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
