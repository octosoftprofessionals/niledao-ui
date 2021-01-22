import React from 'react'
import Helmet from 'react-helmet'
interface Props {
  cardType?: string
  username?: string
  title?: string
  description?: string
  image?: string
}

export default function Twitter({
  cardType = 'summary_large_image',
  username,
  title,
  description,
  image,
}: Props): JSX.Element {
  return (
    <Helmet>
      <meta name="twitter:card" content={cardType} />
      {username && <meta name="twitter:creator" content={username} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
