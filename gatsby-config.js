const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "http://swanitworks.com",
    title: `Swan IT works`,
    description: `We are a leading innovation digitising and software house company.`,
    author: `Swan IT works`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#F6663F`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nutiono:300,400,600,700`,
          `Libre Baskerville:300,400,400i,600,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0
      }
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: false,
        args: ``,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname,`src`,`images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: path.join(__dirname,`config`,`translations`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    }
  ],
}