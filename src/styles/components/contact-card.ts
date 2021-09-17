import styled from 'styled-components'

export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-icon {
    background: ${(props) => props.theme.colors.main.details};
    font-size: 0;

    padding: 1rem;
    border-radius: 50%;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  a {
    text-decoration: underline;
  }
`
