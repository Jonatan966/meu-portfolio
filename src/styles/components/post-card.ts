import styled from 'styled-components'

export const PostCardContainer = styled.a`
  cursor: pointer;

  h4 {
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    h4 {
      color: ${(props) => props.theme.colors.cta.primary};
    }
  }

  h5 {
    margin-bottom: 0.4rem;
  }

  h5,
  p {
    opacity: 0.8;
  }

  &:not(:last-child) {
    position: relative;
    margin-bottom: 1.75rem;

    &:after {
      content: '';

      position: absolute;
      bottom: -1.75rem;

      height: 2px;
      width: 100%;

      background: ${(props) => props.theme.colors.main.details};
      opacity: 0.5;

      user-select: none;
      pointer-events: none;
    }
  }
`
