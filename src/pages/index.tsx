import React from 'react'
import { Layout } from '../components'
import { Button, Typography } from '@material-ui/core'
export default function Home(): JSX.Element {
  return (
    <Layout>
      <div>
        <Typography variant="h1">Gatsby Typescript Material UI Contentful Boilerplate</Typography>
        <Button variant="contained" color="primary">
          Click me !
        </Button>
      </div>
    </Layout>
  )
}
