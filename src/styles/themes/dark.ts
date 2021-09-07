import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  currentTheme: 'dark',
  colors: {
    main: {
      details: '#121214',
      text: '#D9D9D9',
      background: '#29292E',
    },
    cta: {
      hover: '#E76F51',
      primary: '#F4A261',
      active: '#E9C46A',
    },
    messages: {
      danger: '#D1495B',
      success: '#47D191',
      disabled: '#BEBEBE',
    },
  },
}
