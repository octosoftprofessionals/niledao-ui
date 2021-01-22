import React from 'react'
import { Layout } from '../components'
import { usePosts, Post } from '../hooks'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

function getPosts(posts: Post[]) {
  return posts.map(post => (
    <div key={post.id}>
      <Image tw="max-w-sm rounded-lg  shadow-lg z-0" fluid={post.featuredImage} />
      <div tw="px-6 py-4">
        <div>{post.title}</div>
        <p tw="text-base">
          {post.description} <br />
          <Link to={`/blog/${post.slug}`} tw="">
            continue reading ...
          </Link>
        </p>
      </div>
      <div tw="px-6 pt-4 pb-2">
        {post.keywords.map(keyword => (
          <span
            key={keyword}
            tw="inline-block bg-accent-light rounded-full px-3 py-1 text-sm 
          font-semibold mr-2 mb-2"
          >
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  ))
}
export default function Blog(): JSX.Element {
  return (
    <Layout>
      <h1>Blog posts </h1>
      <div tw="block md:flex sm:flex-wrap justify-center">{getPosts(usePosts())}</div>
    </Layout>
  )
}
