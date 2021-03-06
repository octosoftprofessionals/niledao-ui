// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Nile DAO`,
    siteUrl: `https://www.niledao.io/`,
    description: `Nile DAO web page`,
    titleTemplate: '%s · Nile',
    url: ``,
    image: '/images/logo.png',
    owner: 'Boiler Plate',
    twitterUsername: '',
    facebookAppID: '',
  },
  pathPrefix: '/gatsby-typescript-materialui-contentful-boilerplate',
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     serviceID: process.env.GATSBY_APP_SERVICE_ID,
    //     templateID: process.env.GATSBY_APP_TEMPLATE_ID,
    //     userID: process.env.GATSBY_APP_USER_ID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Futura', 'Roboto', 'Cairo'],
        display: 'swap',
      },
    },
  ],
}
