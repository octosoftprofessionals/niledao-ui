import React from 'react'

import tw, { styled } from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Layout } from '../components'
import './rich-text.css'

import { Post } from '../hooks'

function getPost(node: any): Post {
  return {
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    slug: node.slug,
    twitterDescription: node.twitterDescription.twitterDescription,
    description: node.description.description,
    keywords: node.keywords,
    category: node.category,
  }
}

const HeroImage = styled(Image)`
  ${tw`w-full shadow-xl m-0 p-0`}
`

const imageRender = node => {
  const { fields } = node.data.target
  return fields && <img tw="mx-auto my-6" src={`https://${fields.file['en-US'].url}`} />
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BlogPosts({ data }): JSX.Element {
  const { title, featuredImage, body } = getPost(data.contentfulPost)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: imageRender,
    },
  }
  return (
    <Layout>
      <HeroImage fluid={featuredImage} objectFit="fill" />
      <h1 tw="text-center">{title} </h1>
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
`
