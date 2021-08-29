import styled from 'styled-components'

import { DefaultSection } from './default-section'

export const HeroSection = styled(DefaultSection)`
  height: 50rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 685px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`
