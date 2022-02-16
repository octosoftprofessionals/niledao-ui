import { graphql, useStaticQuery } from 'gatsby'
import { AccordianDataSchema } from '.'

export function useFeatures(): AccordianDataSchema[] {
  const data = useStaticQuery(graphql`
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
