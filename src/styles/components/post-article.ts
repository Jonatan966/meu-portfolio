import styled from 'styled-components'
import { DefaultSection } from './default-section'

export const PostArticle = styled(DefaultSection)`
  h6 {
    margin: 0.25rem 0;
    font-weight: normal;

    opacity: 0.75;
  }

  header {
    margin-bottom: 1.5rem;
  }

  p + p {
    margin-top: 1rem;
  }

  header a svg {
    fill: ${(props) => props.theme.colors.main.text};
  }
`
