import styled, { css } from 'styled-components'

interface ButtonProps {
  isOutlined?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;

  transition: 0.2s background, 0.2s color, 0.2s border-color;

  border-radius: 0.45rem;
  border: none;

  cursor: pointer;

  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.isOutlined
      ? css`
          border: 2px solid ${(props) => props.theme.colors.cta.primary};
          background: transparent;

          &:disabled {
            border-color: ${(props) => props.theme.colors.messages.disabled};
            color: ${(props) => props.theme.colors.messages.disabled}bb;
          }

          &:not(:disabled) {
            color: ${(props) => props.theme.colors.cta.active};

            &:hover {
              border-color: ${(props) => props.theme.colors.cta.hover};
              color: ${(props) => props.theme.colors.cta.primary};
            }

            &:active {
              border-color: ${(props) => props.theme.colors.cta.active};
              color: ${(props) => props.theme.colors.cta.primary};
            }
          }
        `
      : css`
          &:disabled {
            background: ${(props) => props.theme.colors.messages.disabled};
          }

          &:not(:disabled) {
            background: ${(props) => props.theme.colors.cta.primary};
            &:hover {
              background: ${(props) => props.theme.colors.cta.hover};
            }

            &:active {
              background: ${(props) => props.theme.colors.cta.active};
            }
          }
        `}
`
