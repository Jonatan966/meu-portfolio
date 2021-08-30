import styled, { css } from 'styled-components'

import { ImageSize } from '../../@types/image-size'

interface TechIconProps {
  size?: ImageSize
}
// 4.75
const getImageSize = (size: ImageSize) =>
  typeof size === 'number'
    ? {
        width: size,
        height: size,
      }
    : size

export const AppImageContainer = styled.div<TechIconProps>`
  ${(props) =>
    props.size &&
    css`
      width: ${() => getImageSize(props.size).width}rem;
      height: ${() => getImageSize(props.size).height}rem;
    `};

  .tech-image {
    border-radius: 0.5rem;
  }

  position: relative;
`
