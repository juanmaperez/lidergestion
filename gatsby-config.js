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
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9BT0FHFNB2", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
