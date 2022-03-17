import { config } from 'utils/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'

const NextImage = ({ image, options, builder, ...props }) => {
  if (!image) return null

  const imageProps = useNextSanityImage(
    config,
    image,
    {
      ...options,
      imageBuilder: builder,
    }
  )

  return (
    <Img {...imageProps} {...props} unoptimized={!!builder} />
  )
}

export default NextImage
