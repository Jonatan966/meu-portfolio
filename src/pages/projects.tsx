import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

import { ProjectCard } from '../components/project-card'
import { AppHead } from '../components/app-head'
import { prismic } from '../services/prismic'
import { parsePrismicList } from '../utils/parse-prismic-list'
import { Project } from '../@types/project'

import {
  DefaultSection,
  SectionHeader,
} from '../styles/components/default-section'
import { FlexList } from '../styles/components/flex-list'

interface ProjectsPageProps {
  projects: Project[]
}

export default function ProjectsPage({
  projects,
}: ProjectsPageProps): JSX.Element {
  return (
    <>
      <AppHead title="Projetos" />
      <main>
        <DefaultSection>
          <SectionHeader>
            <h3>Meus projetos</h3>
          </SectionHeader>

          <FlexList direction="column" gap={1}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </FlexList>
        </DefaultSection>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = (
    await prismic.query(Prismic.Predicates.at('document.type', 'project'), {
      fetchLinks: ['techs.name', 'techs.icon', 'techs.about_url'],
    })
  ).results

  let parsedProjects = parsePrismicList(
    projects.map((project) => ({
      project,
    }))
  )

  parsedProjects = parsedProjects.map((project) => ({
    ...project,
    techs: parsePrismicList(project.techs),
  }))

  return {
    props: {
      projects: parsedProjects,
    },
  }
}
