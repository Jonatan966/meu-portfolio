import { useTheme } from 'styled-components'

import { Button } from '../styles/components/button'

import SunImg from '../images/sun.svg'
import MoonImg from '../images/moon.svg'

interface ThemeSwitcherProps {
  toggleTheme: () => void
}

export function ThemeSwitcher({
  toggleTheme,
}: ThemeSwitcherProps): JSX.Element {
  const { currentTheme } = useTheme()

  const themeIcons = {
    light: <MoonImg />,
    dark: <SunImg fill="white" />,
  }

  return (
    <Button title="Trocar tema" onClick={toggleTheme}>
      {themeIcons[currentTheme]}
    </Button>
  )
}
