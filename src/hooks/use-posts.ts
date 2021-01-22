import { graphql, useStaticQuery } from 'gatsby'
import { Post } from '.'

import { Query } from '../types/generated'

export function usePosts(): Post[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulPost {
        nodes {
          id
          slug
          title
          twitterDescription {
            twitterDescription
          }
          publishedOn
          keywords
          category
          description {
            description
          }
          featuredImage {
            fluid {
              sizes
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
    }
  `)
  const dataToReturn = data.allContentfulPost.nodes.map(node => ({
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    slug: node.slug,
    twitterDescription: node.twitterDescription.twitterDescription,
    description: node.description.description,
    keywords: node.keywords,
    category: node.category,
  }))
  return [...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn]
}
