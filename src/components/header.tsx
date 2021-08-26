import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '../styles/components/button'
import { HeaderContainer } from '../styles/components/header'

import chatBaloonImg from '../images/chat-baloon.svg'
import hamburguerMenuImg from '../images/hamburguer-menu.svg'
import closeImg from '../images/close.svg'

export function Header(): JSX.Element {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  return (
    <HeaderContainer>
      <div className="content">
        <Button>A</Button>

        <strong className="only-mobile">Home</strong>

        <Button
          className="only-mobile"
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <Image src={isOptionsVisible ? closeImg : hamburguerMenuImg} />
        </Button>

        <nav className={isOptionsVisible ? 'visible' : ''}>
          <ul>
            <Link href="#">
              <a className="selected">Home</a>
            </Link>
            <Link href="#">
              <a>Projetos</a>
            </Link>
            <Link href="#">
              <a>Blog</a>
            </Link>
          </ul>

          <Button>
            <Image src={chatBaloonImg} />
            <span>Entrar em contato</span>
          </Button>
        </nav>
      </div>
    </HeaderContainer>
  )
}
