import styled from 'styled-components'

export const AboutMeSectionContent = styled.main`
  display: flex;
  gap: 1rem;

  p {
    max-width: 75%;
  }

  @media (max-width: 425px) {
    p {
      max-width: 100%;
    }
    flex-direction: column;
  }
`

export const ProfileImageContainer = styled.div`
  position: relative;

  align-self: center;

  width: 13rem;
  height: 13rem;

  margin: 0 auto;

  > div {
    border-radius: 13rem;
  }
`
