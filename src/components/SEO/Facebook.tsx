import React from 'react'
import Helmet from 'react-helmet'
interface Props {
  pageUrl: string
  type: string
  title: string
  description: string
  image: string
  appID: string
}
export default function Facebook({ pageUrl, type = 'website', title, description, image, appID }: Props): JSX.Element {
  return (
    <Helmet>
      {pageUrl && <meta property="og:url" content={pageUrl} />}
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {appID && <meta property="fb:app_id" content={appID} />}
    </Helmet>
  )
}
