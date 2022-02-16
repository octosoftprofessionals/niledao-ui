// import { graphql, useStaticQuery } from 'gatsby'
import { AccordianDataSchema } from '.'

// import { Query } from '../types/generated'

export function useFaqs(): AccordianDataSchema[] {
  // const data: Query = useStaticQuery(graphql`
  //   query {
  //     allContentfulPost {
  //       nodes {
  //         id
  //         slug
  //         title
  //         twitterDescription {
  //           twitterDescription
  //         }
  //         publishedOn
  //         keywords
  //         category
  //         description {
  //           description
  //         }

  //         featuredImage {
  //           fluid {
  //             sizes
  //             aspectRatio
  //             base64
  //             src
  //             srcSet
  //             srcSetWebp
  //             srcWebp
  //             tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // return data.allContentfulPost.nodes.map(node => ({
  //   id: node.id,
  //   featuredImage: node.featuredImage.fluid,
  //   title: node.title,
  //   slug: node.slug,
  //   twitterDescription: node.twitterDescription.twitterDescription,
  //   description: node.description.description,
  //   keywords: node.keywords,
  //   category: node.category,
  // }))
  return [
    {
      id: 'one',
      title: 'This is a question',
      open: true,
    },
    {
      id: 'two',
      title: 'This is a question',
      open: false,
    },
    {
      id: 'three',
      title: 'This is a question',
      open: false,
    },
    {
      id: 'four',
      title: 'This is a question',
      open: false,
    },
  ]
}
