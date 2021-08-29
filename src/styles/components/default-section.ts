import styled from 'styled-components'

import { Button } from './button'

export const DefaultSection = styled.section`
  max-width: calc(1060px + 2rem);
  width: -webkit-fill-available;

  margin: 0 auto;
  padding: 2.25rem;

  header {
    margin-bottom: 1rem;

    display: flex;
    align-items: center;

    ${Button} {
      margin-left: auto;
    }
  }

  @media (max-width: 575px) {
    padding: 2rem 1rem;
  }
`
