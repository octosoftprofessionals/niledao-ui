import { graphql, useStaticQuery } from 'gatsby'
import { AccordianDataSchema } from '.'

import { Query } from '../types/generated'

export function useFeatures(): AccordianDataSchema[] {
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
    description: node.twitterDescription.twitterDescription,
    open: false,
  }))
  const aa = [...dataToReturn, dataToReturn[1]]
  const senData = []
  aa.forEach((element, index) => {
    senData.push({
      ...element,
      id: index,
      description:
        'Voluptate sit minim reprehenderit dolor officia aute elit pariatur aliquip. Irure labore aute nisi enim cillum dolor deserunt cupidatat nulla id adipisicing labore. In laboris cillum ut ut do.',
    })
  })

  senData[0].open = true

  return senData
}
