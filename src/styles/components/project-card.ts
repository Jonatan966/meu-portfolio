import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 20rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .project-image {
    position: relative;

    .image-container {
      border-radius: 0.45rem 0 0 0.45rem;
      filter: brightness(0.85);
    }

    strong {
      color: ${(props) => props.theme.colors.main.details};
      background: ${(props) => props.theme.colors.cta.primary};

      position: absolute;
      top: 0.5rem;
      left: 0.5rem;

      padding: 0.25rem;
      border-radius: 0.25rem;

      font-size: 1.2rem;

      z-index: 1;
    }
  }

  .project-info {
    background: ${(props) => props.theme.colors.main.details};
    padding: 0.5rem;

    border-radius: 0 0.45rem 0.45rem 0;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    footer {
      margin-top: auto;

      padding-top: 1rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20rem 1fr;

    min-height: initial;

    .project-info {
      border-radius: 0 0 0.45rem 0.45rem;
    }

    .project-image .image-container {
      border-radius: 0.45rem 0.45rem 0 0;
    }
  }

  @media (max-width: 375px) {
    .project-info footer {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`
