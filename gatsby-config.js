module.exports = {
  siteMetadata: {
    title: `jumpsuit.life`,
    description: `jumpsite.life is my personal blog.`,
    author: `broeker@gmail.com`,
    slogan: 'since 2019'
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: 'gatsby-source-google-sheets',
    options: {
        spreadsheetId: '1CqKrChn44fsm3JnWZm6utsvWfJYTp4AKB12VUMW0yT8',
        worksheetTitle: 'Sheet1',
        credentials: require('./client_secret.json')
    }
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://jumpsuit.docksal/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    }
    // this (optional) plugin enables Prgressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
