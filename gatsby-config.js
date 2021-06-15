module.exports = {
  siteMetadata: {
    title: `Líder Gestión`,
    siteUrl: 'https://seguroslidergestion.com',
    description: `Los mejores seguros de coche, hogar y salud de la provincia de Sevilla.`,
    keywords: [`seguros baratos`, 'seguros de coche', 'seguros de automovil', 'seguros sevilla', 'seguro de coche sevilla']
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-K5SYFNFFXF",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://resources.seguroslidergestion.com/graphql`,
        protocol: `https`,
      },
    },
  ]
};
