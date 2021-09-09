import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { Link as PrismicLink } from 'prismic-reactjs'

import { prismic } from '../services/prismic'

import { Button } from '../styles/components/button'
import {
  DefaultSection,
  SectionHeader,
} from '../styles/components/default-section'
import { GridList } from '../styles/components/grid-list'
import { parsePrismicList } from '../utils/parse-prismic-list'

interface ContactButtonProps {
  href: string
  children: string
}

interface FormOfContact {
  title: string
  columns_per_row: number
  id: string
  links: {
    link_title: string
    link: PrismicLink
  }[]
}

interface ContactPageProps {
  formsOfContact: FormOfContact[]
}

function ContactButton({ children, href }: ContactButtonProps) {
  return (
    <Button as="a" target="_blank" href={href}>
      {children}
    </Button>
  )
}

export default function ContactPage({
  formsOfContact,
}: ContactPageProps): JSX.Element {
  return (
    <>
      <main>
        {formsOfContact.map((formOfContact) => (
          <DefaultSection key={formOfContact.id}>
            <SectionHeader>
              <h3>{formOfContact.title}</h3>
            </SectionHeader>

            <GridList columns={formOfContact.columns_per_row} gap={1}>
              {formOfContact.links.map((link) => (
                <ContactButton key={link.link.url} href={link.link.url}>
                  {link.link_title}
                </ContactButton>
              ))}
            </GridList>
          </DefaultSection>
        ))}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let formsOfContact = (
    await prismic.query(
      Prismic.Predicates.at('document.type', 'form_of_contact'),
      { orderings: '[document.first_publication_date]' }
    )
  ).results

  formsOfContact = parsePrismicList(
    formsOfContact.map((contact) => ({
      contact,
    }))
  )

  return {
    props: {
      formsOfContact,
    },
  }
}
