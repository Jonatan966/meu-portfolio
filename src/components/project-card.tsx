import Image from 'next/image'
import Link from 'next/link'

import { Project } from '../@types/project'
import { AppImage } from './app-image'

import { Button } from '../styles/components/button'
import { FlexList } from '../styles/components/flex-list'
import { ProjectCardContainer } from '../styles/components/project-card'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({
  project: {
    name,
    description,
    main_image_url,
    repository_url,
    hosted_url,
    techs,
  },
}: ProjectCardProps): JSX.Element {
  return (
    <ProjectCardContainer>
      <div className="project-image">
        <strong>{name}</strong>
        <Image
          src={main_image_url}
          objectFit="cover"
          layout="fill"
          className="image-container"
        />
      </div>

      <article className="project-info">
        <section>
          <h6>Descrição</h6>
          <p>{description}</p>
        </section>

        <section>
          <h6>Tecnologias utilizadas</h6>
          <FlexList direction="row" gap={0.5}>
            {techs.map((tech) => (
              <AppImage
                src={tech.icon_url}
                alt={tech.name}
                key={tech.id}
                size={3.75}
              />
            ))}
          </FlexList>
        </section>

        <footer>
          <Link href={hosted_url || ''}>
            <Button disabled={!hosted_url}>Testar</Button>
          </Link>
          <Link href={repository_url}>
            <Button isOutlined>Ver código fonte</Button>
          </Link>
        </footer>
      </article>
    </ProjectCardContainer>
  )
}
