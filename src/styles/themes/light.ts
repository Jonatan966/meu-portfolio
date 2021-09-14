import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  currentTheme: 'light',
  colors: {
    main: {
      details: '#F6F6F6',
      text: '#29292E',
      background: '#D9D9D9',
    },
    cta: {
      hover: '#E76F51',
      primary: '#F4A261',
      active: '#e08851',
    },
    messages: {
      danger: '#D1495B',
      success: '#47D191',
      disabled: '#BEBEBE',
    },
  },
}
