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
      description:
        'Nulla aute mollit commodo non ea anim do commodo exercitation mollit duis occaecat deserunt. Veniam ut anim enim sint excepteur veniam dolore ex amet aliquip fugiat id. Tempor ut esse adipisicing ea aliquip elit irure sint sunt. Ea duis consequat id aliquip voluptate consectetur eiusmod Lorem laboris sint adipisicing eu est ullamco. Qui aliqua exercitation ad nulla excepteur et. Eiusmod nostrud ut ipsum eiusmod amet proident deserunt non est. Eu id anim et laborum consectetur voluptate irure id eiusmod consectetur.',
      open: true,
    },
    {
      id: 'two',
      title: 'This is a question',
      description:
        'Laborum ullamco laborum amet reprehenderit aliquip adipisicing cillum aute reprehenderit labore do cupidatat. Pariatur pariatur labore fugiat quis est ut est. Esse magna eiusmod do ipsum dolore. Deserunt sunt laboris magna veniam aliquip cillum mollit eu nostrud quis sunt Lorem nisi.',
      open: false,
    },
    {
      id: 'three',
      title: 'This is a question',
      description:
        'Duis pariatur dolor Lorem adipisicing in occaecat tempor ea. Reprehenderit do labore ex non. Esse cillum ullamco exercitation ullamco exercitation dolore fugiat sunt cupidatat consequat officia quis ad. Ut adipisicing culpa duis cillum non nostrud veniam culpa occaecat aliqua. Excepteur in excepteur consequat ad duis eiusmod. Nulla mollit aliqua non dolore. Elit eiusmod culpa irure aliqua.',
      open: false,
    },
    {
      id: 'four',
      title: 'This is a question',
      description:
        'Ut laboris excepteur ad tempor dolor excepteur sunt. Laboris consequat cupidatat est tempor cillum dolor. Nisi occaecat do eiusmod eu consequat cupidatat. Velit dolore nisi irure anim aliquip eiusmod dolore officia sit sit cupidatat in laboris.',
      open: false,
    },
  ]
}
