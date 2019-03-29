require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `test 123`,
    description: `Powered by Gatsby and Drupal`,
    author: `broeker@gmail.com`,
    slogan: 'Drupal, Gatsby, and the jumpsuit lifestyle.'
  },
  plugins: [

         
    
     {
      resolve: `gatsby-plugin-page-transitions`,
      options: {
        transition: 99000,
      },
    },

    // PLUGIN-SHARP
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-copy-linked-files`,
    
        
    // SOURCE FILSYSTEM
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
     // SOURCE FILSYSTEM
     {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/content`,
          name: "markdown-pages",
        },
    },
    

        
    // TRANSFORMER REMARK
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },

        
    
    
    
    // HELMET
    `gatsby-plugin-react-helmet`,

    // SOURCE DRUPAL
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://jumpsuit.docksal/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },

    // SOURCE GOOGLE SHEETS 
    {
    resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1CqKrChn44fsm3JnWZm6utsvWfJYTp4AKB12VUMW0yT8',
        worksheetTitle: 'Sites',
        credentials: require('./client_secret.json')
      }
    },

    // MANIFEST
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

    // this (optional) plugin enables Prgressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
