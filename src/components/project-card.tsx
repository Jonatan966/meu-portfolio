import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import { Project } from '../@types/project'
import { AppImage } from './app-image'

import { Button } from '../styles/components/button'
import { FlexList } from '../styles/components/flex-list'
import { ProjectCardContainer } from '../styles/components/project-card'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({
  project: { name, description, main_image, repository_url, hosted_url, techs },
}: ProjectCardProps): JSX.Element {
  return (
    <ProjectCardContainer>
      <div className="project-image">
        <strong>{name}</strong>
        <Image
          src={main_image.url}
          objectFit="cover"
          layout="fill"
          className="image-container"
        />
      </div>

      <article className="project-info">
        <section>
          <h6>Descrição</h6>
          {RichText.render(description)}
        </section>

        <section>
          <h6>Tecnologias utilizadas</h6>
          <FlexList direction="row" gap={0.5}>
            {techs.map((tech) => (
              <AppImage
                src={tech.icon.url}
                alt={tech.name}
                key={tech.id}
                size={3.5}
              />
            ))}
          </FlexList>
        </section>

        <footer>
          <Button
            {...(hosted_url?.url
              ? { as: 'a', href: hosted_url.url, target: '_blank' }
              : { disabled: true })}
          >
            Testar
          </Button>
          <Button isOutlined as="a" target="_blank" href={repository_url.url}>
            Ver código fonte
          </Button>
        </footer>
      </article>
    </ProjectCardContainer>
  )
}
