import React from 'react'
import Helmet from 'react-helmet'
import Twitter from './Twitter'
import Facebook from './Facebook'
import { UseSiteMeata } from '../../hooks'
interface Props {
  title?: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
}
export default function SEO({ title, description, image, pathname, article = false }: Props): JSX.Element {
  const data = UseSiteMeata()
  const seo = {
    title: title || data.defaultTitle,
    description: description || data.defaultDescription,
    image: `${data.siteUrl}${image || data.defaultImage}`,
    url: `${data.siteUrl}${pathname || '/'}`,
  }

  return (
    <>
      <Helmet title={seo.title} titleTemplate={data.titleTemplate}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="title" content={seo.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={seo.description} />
        <meta itemProp="image" content={seo.image} />
      </Helmet>
      <Facebook
        pageUrl={seo.url}
        type={article ? 'article' : null}
        title={seo.title}
        description={seo.description}
        image={seo.image}
        appID={data.facebookAppID}
      />
      <Twitter username={data.twitterUsername} title={seo.title} description={seo.description} image={seo.image} />
    </>
  )
}
