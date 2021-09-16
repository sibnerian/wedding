const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: 'Sara & Ian',
    keywords: ['Sara Dornblaser', 'Ian Sibner'],
    description: "Sara Dornblaser and Ian Sibner's wedding website",
    author: 'Sara Dornblaser & Ian Sibner',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TOKEN, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sara & Ian',
        short_name: 'Sara & Ian',
        description: "Sara and Ian's wedding website",
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#9ebc9f',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: '@import "core.scss";',
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src/style')],
        },
      },
    },
  ],
};
