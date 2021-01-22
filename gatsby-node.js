/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const slash = require('slash')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulPost {
        nodes {
          id
          slug
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        console.log('Error retrieving contentful data', result.errors)
      }
      const sitePostTemplate = path.resolve('./src/templates/blog-post.tsx')
      result.data.allContentfulPost.nodes.forEach(post => {
        createPage({
          path: `/blog/${post.slug}/`,
          component: slash(sitePostTemplate),
          context: {
            slug: post.slug,
            id: post.id,
          },
        })
      })
    })
    .catch(error => {
      console.log('Error cannot retrive contentful data', error)
    })
}
