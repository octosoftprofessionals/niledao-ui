import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'

const Hero = styled.div`
  ${tw`block sm:flex px-6 py-6`}
`
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Hero>
        <h1>Gatsby Typescript Tailwindcss Contentful Boilerplate</h1>
      </Hero>
    </Layout>
  )
}
