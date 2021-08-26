import { useEffect, useState } from 'react'

import {
  CarouselImage,
  MainCarouselContainer,
} from '../styles/components/main-carousel'

interface MainCarouselProps {
  images: string[]
}

export function MainCarousel({ images }: MainCarouselProps): JSX.Element {
  const [positions, setPositions] = useState<number[]>(
    images.map((_, index) => index)
  )

  function togglePosition() {
    setPositions((oldPositions) => {
      const newPositions = [...oldPositions]
      newPositions.push(newPositions.shift())
      return newPositions
    })
  }

  useEffect(() => {
    const interval = setInterval(togglePosition, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <MainCarouselContainer imageCount={images.length}>
      {images.map((url, key) => (
        <CarouselImage
          src={url}
          id={`${positions[key]}`}
          key={`image-${key}`}
          imageCount={images.length}
        />
      ))}
    </MainCarouselContainer>
  )
}
