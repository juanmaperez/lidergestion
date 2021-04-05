module.exports = {
  siteMetadata: {
    title: `Líder Gestión`,
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
    `gatsby-plugin-no-index`, // TODO: remove later
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://resources.seguroslidergestion.com/graphql`,
        protocol: `https`,
      },
    },
  ]
};
