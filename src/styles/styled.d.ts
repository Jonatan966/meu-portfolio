import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    currentTheme: 'dark' | 'light',
    colors: {
      main: {
        details: string,
        text: string,
        background
      },
      cta: {
        hover: string,
        primary: string,
        active: string
      },
      messages: {
        danger: string,
        success: string,
        disabled: string,
      }
    }
  }
}