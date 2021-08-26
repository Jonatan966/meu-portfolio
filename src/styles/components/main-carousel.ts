import styled from 'styled-components'

interface MainCarouselContainerProps {
  imageCount: number
}

const carouselImageWidth = 25
const carouselImageHeight = 15

export const MainCarouselContainer = styled.div<MainCarouselContainerProps>`
  position: relative;
  width: ${(props) => carouselImageWidth + props.imageCount - 1}rem;
  height: ${(props) => carouselImageHeight + props.imageCount - 1}rem;

  @media (max-width: 425px) {
    zoom: 0.75;
  }

  z-index: -1;
`

export const CarouselImage = styled.img<MainCarouselContainerProps>`
  width: ${carouselImageWidth}rem;
  height: ${carouselImageHeight}rem;
  border-radius: 0.5rem;

  object-fit: cover;

  position: absolute;
  top: ${(props) => props.id}rem;
  left: ${(props) => props.id}rem;
  z-index: ${(props) => props.id};

  transition: top 0.25s ease-in-out, left 0.25s ease-in-out;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    ${(props) =>
      props.imageCount - 1 !== Number(props.id) && 'brightness(0.45)'};
`
