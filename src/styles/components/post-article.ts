import styled from 'styled-components'
import { DefaultSection } from './default-section'

export const PostArticle = styled(DefaultSection)`
  h6 {
    margin: 1.35rem 0;
    font-weight: normal;

    opacity: 0.75;
  }

  p + p {
    margin-top: 1rem;
  }

  header a svg {
    fill: ${(props) => props.theme.colors.main.text};
  }
`
