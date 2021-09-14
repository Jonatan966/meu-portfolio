import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '../styles/components/button'
import { HeaderContainer } from '../styles/components/header'

import ChatBaloonImg from '../images/chat-baloon.svg'
import HamburguerMenuImg from '../images/hamburguer-menu.svg'
import CloseImg from '../images/close.svg'
import { ThemeSwitcher } from './theme-switcher'

interface HeaderProps {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: HeaderProps): JSX.Element {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const router = useRouter()

  const checkRoute = (route: string, isExact = false): string =>
    (isExact ? router.pathname === route : router.pathname.includes(route))
      ? 'selected'
      : ''

  const routeTitles = {
    '/': 'Home',
    '/projects': 'Projetos',
    '/posts': 'Blog',
    '/contact': 'Contato',
  }

  const firstPartOfRoute = router.pathname.substring(
    `${router.pathname}/`.indexOf('/', 1),
    0
  )

  useEffect(() => {
    setIsOptionsVisible(false)
  }, [router.pathname])

  return (
    <HeaderContainer className={isOptionsVisible ? 'is-options-visible' : ''}>
      <div className="content">
        <ThemeSwitcher toggleTheme={toggleTheme} />

        <strong className="only-mobile" hidden={isOptionsVisible}>
          {routeTitles[firstPartOfRoute]}
        </strong>

        <Button
          className="only-mobile"
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          {isOptionsVisible ? <CloseImg /> : <HamburguerMenuImg />}
        </Button>

        <nav className={isOptionsVisible ? 'visible' : ''}>
          <ul>
            <Link href="/">
              <a className={checkRoute('/', true)}>Home</a>
            </Link>
            <Link href="/projects">
              <a className={checkRoute('/projects')}>Projetos</a>
            </Link>
            <Link href="/posts">
              <a className={checkRoute('/posts')}>Blog</a>
            </Link>
          </ul>

          <Link href="/contact">
            <Button>
              <ChatBaloonImg />
              <span>Entrar em contato</span>
            </Button>
          </Link>
        </nav>
      </div>
    </HeaderContainer>
  )
}
