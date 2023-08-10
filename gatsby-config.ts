import type { GatsbyConfig } from 'gatsby'

interface GoogleGtagPluginOptions {
  trackingIds: string[] // Массив строк для трекеров Google Analytics ID
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tatreal`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['GA-TRACKING-ID-1'], // Замените на ваш трекер Google Analytics ID
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
  ],
}

export default config
