import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '../styles/components/button'
import { HeaderContainer } from '../styles/components/header'

import chatBaloonImg from '../images/chat-baloon.svg'
import hamburguerMenuImg from '../images/hamburguer-menu.svg'
import closeImg from '../images/close.svg'

export function Header(): JSX.Element {
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
    <HeaderContainer>
      <div className="content">
        <Button>A</Button>

        <strong className="only-mobile" hidden={isOptionsVisible}>
          {routeTitles[firstPartOfRoute]}
        </strong>

        <Button
          className="only-mobile"
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <Image src={isOptionsVisible ? closeImg : hamburguerMenuImg} />
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
              <Image src={chatBaloonImg} />
              <span>Entrar em contato</span>
            </Button>
          </Link>
        </nav>
      </div>
    </HeaderContainer>
  )
}
