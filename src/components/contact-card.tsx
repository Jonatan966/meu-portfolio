import Link from 'next/link'

import { ContactCardContainer } from '../styles/components/contact-card'

import GithubIcon from '../images/github-icon.svg'
import LinkedinIcon from '../images/linkedin-icon.svg'
import EmailIcon from '../images/email-icon.svg'
import WhatsappIcon from '../images/whatsapp-icon.svg'

import { FormOfContact } from '../@types/form-of-contact'

const contactIcons = {
  github: <GithubIcon />,
  linkedin: <LinkedinIcon />,
  email: <EmailIcon />,
  whatsapp: <WhatsappIcon />,
}

interface ContactCardProps {
  formOfContact: FormOfContact
}

export function ContactCard({
  formOfContact: { link_title, link, title, type },
}: ContactCardProps): JSX.Element {
  return (
    <ContactCardContainer>
      <div className="contact-icon">{contactIcons?.[type]}</div>
      <h6>{title}</h6>
      <Link href={link.url}>
        <a target="_blank">{link_title}</a>
      </Link>
    </ContactCardContainer>
  )
}
