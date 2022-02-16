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
        }
      }
    }
  `)
  const dataToReturn = data.allContentfulPost.nodes.map(node => ({
    id: node.id,
    title: node.title,
    slug: node.slug,
  }))
  return [...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn, ...dataToReturn]
}
