import Image from 'next/image'
import { ImageSize } from '../@types/image-size'

import { AppImageContainer } from '../styles/components/app-image'

interface AppImageProps {
  src: string
  alt?: string
  size?: ImageSize
  className?: string
  id?: string
}

export function AppImage({
  src,
  alt,
  size,
  className = '',
}: AppImageProps): JSX.Element {
  return (
    <AppImageContainer size={size} className={className}>
      <Image
        src={src}
        alt={alt}
        className="tech-image"
        layout="fill"
        loading="lazy"
      />
    </AppImageContainer>
  )
}
