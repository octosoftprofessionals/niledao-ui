import { graphql, useStaticQuery } from 'gatsby'
import { Query } from '../types/generated'

export function UseSiteMeata(): any {
  const data: Query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          siteUrl: url
          defaultImage: image
          twitterUsername
          facebookAppID
        }
      }
    }
  `)

  return data.site.siteMetadata
}
