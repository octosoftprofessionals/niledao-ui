import React from 'react'

import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Layout } from '../components'
import './rich-text.css'

import { Post } from '../hooks'

function getPost(node: any): Post {
  return {
    id: node.id,
    title: node.title,
    slug: node.slug,
  }
}

const imageRender = node => {
  const { fields } = node.data.target
  return fields && <img tw="mx-auto my-6" src={`https://${fields.file['en-US'].url}`} />
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BlogPosts({ data }): JSX.Element {
  const { title, body } = getPost(data.contentfulPost)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: imageRender,
    },
  }
  return (
    <Layout>
      <h1>{title} </h1>
      {documentToReactComponents(body, options)}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    contentfulPost(id: { eq: $id }) {
      id
      slug
      title
    }
  }
`
