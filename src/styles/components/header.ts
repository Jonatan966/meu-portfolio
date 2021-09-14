import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  background: ${(props) => props.theme.colors.main.background}dd;
  backdrop-filter: blur(4px);
  height: 4.5rem;

  position: sticky;
  top: 0;
  z-index: 9999;

  &.is-options-visible {
    background: ${(props) => props.theme.colors.main.background};
  }

  .content {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    max-width: 1060px;
    width: 100%;

    margin: 1rem;

    position: relative;

    > strong {
      font-size: 1.5rem;
      align-self: center;
    }
  }

  nav {
    flex: 1;
    display: flex;
    align-items: center;

    ul {
      margin: 0 auto;
    }

    a {
      font-size: 1.25rem;
      transition: 0.2s font-size;

      & + a {
        margin-left: 0.75rem;
      }

      transition: 0.3s filter;

      &:hover {
        filter: brightness(0.8);
      }

      &:active {
        filter: brightness(0.5);
      }

      &.selected {
        font-weight: bold;
        font-size: 1.5rem;

        user-select: none;
        pointer-events: none;
      }
    }
  }

  .only-mobile {
    visibility: hidden;
  }

  @media (max-width: 575px) {
    nav {
      position: absolute;
      bottom: 0;
      left: -1rem;
      right: -1rem;

      &:not(.visible) {
        display: none;
      }

      padding: 1rem;
      align-items: stretch;

      background: ${(context) => context.theme.colors.main.background};
      height: calc(100vh - 4.5rem);

      /* backdrop-filter: blur(4px); */

      flex-direction: column;
      gap: 0.5rem;

      transform: translateY(calc(100% + 1rem));

      ul {
        display: flex;
        flex-direction: column;
        text-align: center;

        width: 100%;

        a {
          margin: 0;
          padding: 0.5rem;
        }
      }

      button {
        margin-top: auto;
      }
    }

    .only-mobile {
      visibility: visible;
    }
  }
`
