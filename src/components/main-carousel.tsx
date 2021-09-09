import { useEffect, useState } from 'react'
import { Image } from '../@types/image'

import {
  CarouselImage,
  MainCarouselContainer,
} from '../styles/components/main-carousel'

interface MainCarouselProps {
  images: Image[]
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
      {images.map(({ url, alt }, key) => (
        <CarouselImage
          src={url}
          alt={alt}
          id={`${positions[key]}`}
          key={`image-${key}`}
          imageCount={images.length}
        />
      ))}
    </MainCarouselContainer>
  )
}
