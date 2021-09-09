import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Prismic from '@prismicio/client'
import { RichText, RichTextBlock, Link as PrismicLink } from 'prismic-reactjs'

import { MainCarousel } from '../components/main-carousel'
import { ProjectCard } from '../components/project-card'
import { Footer } from '../components/footer'
import { AppImage } from '../components/app-image'
import { AppHead } from '../components/app-head'

import { Button } from '../styles/components/button'
import {
  DefaultSection,
  SectionHeader,
} from '../styles/components/default-section'
import { HeroSection } from '../styles/components/hero-section'
import { FlexList } from '../styles/components/flex-list'
import {
  AboutMeSectionContent,
  ProfileImageContainer,
} from '../styles/components/about-me-section'

import { Tech } from '../@types/tech'
import { Project } from '../@types/project'
import { Image as PrismicImage } from '../@types/image'

import { prismic } from '../services/prismic'
import { parsePrismicList } from '../utils/parse-prismic-list'

export interface AboutMe {
  description: RichTextBlock[]
  skills: Tech[]
  favorite_projects: Project[]
  carousel: PrismicImage[]
  curriculum: PrismicLink
}

export default function HomePage({
  description,
  skills,
  favorite_projects,
  carousel,
  curriculum,
}: AboutMe): JSX.Element {
  return (
    <>
      <AppHead title="Home" />
      <main>
        <HeroSection>
          <h2>
            👋 Olá, <br /> me chamo <br /> Jonatan
          </h2>
          <MainCarousel images={carousel} />
        </HeroSection>

        <DefaultSection>
          <SectionHeader>
            <h3>Quem eu sou</h3>
            <Button
              isOutlined
              className="hide-on-mobile"
              as="a"
              href={curriculum.url}
              target="_blank"
            >
              Obter meu currículo
            </Button>
          </SectionHeader>

          <AboutMeSectionContent>
            {RichText.render(description)}

            <ProfileImageContainer>
              <Image
                src="https://github.com/Jonatan966.png"
                width={256}
                height={256}
              />
            </ProfileImageContainer>
            <Button
              isOutlined
              className="only-on-mobile"
              as="a"
              href={curriculum.url}
              target="_blank"
            >
              Obter meu currículo
            </Button>
          </AboutMeSectionContent>
        </DefaultSection>

        <DefaultSection>
          <SectionHeader>
            <h3>Minhas habilidades</h3>
          </SectionHeader>
          <FlexList direction="row" gap={0.5}>
            {skills.map((skill) => (
              <Link href={skill.about_url.url} key={skill.id}>
                <a>
                  <AppImage
                    src={skill.icon.url}
                    alt={skill.icon.alt}
                    size={4.75}
                  />
                </a>
              </Link>
            ))}
          </FlexList>
        </DefaultSection>

        <DefaultSection>
          <SectionHeader>
            <h3>Meus projetos favoritos</h3>
            <Link href="/projects">
              <Button isOutlined className="hide-on-mobile">
                Ver todos
              </Button>
            </Link>
          </SectionHeader>

          <FlexList direction="column" gap={1}>
            {favorite_projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <Link href="/projects">
              <Button isOutlined className="only-on-mobile">
                Ver todos
              </Button>
            </Link>
          </FlexList>
        </DefaultSection>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const informations = (
    await prismic.query(Prismic.Predicates.at('document.type', 'about_me'), {
      fetchLinks: [
        'techs.name',
        'techs.icon',
        'techs.about_url',
        'project.name',
        'project.description',
        'project.repository_url',
        'project.hosted_url',
        'project.main_image',
        'project.techs',
      ],
    })
  ).results[0].data

  const parsedInformations = {
    description: informations.description,
    curriculum: informations.curriculum,
    skills: parsePrismicList(informations.skills),
    favorite_projects: parsePrismicList(informations.favorite_projects),
    carousel: parsePrismicList(informations.carousel, false),
  }

  parsedInformations.favorite_projects =
    parsedInformations.favorite_projects.map((project) => ({
      ...project,
      techs: parsePrismicList(project.techs),
    }))

  return {
    props: parsedInformations,
    revalidate: 60 * 60 * 6, // 6 hours
  }
}
