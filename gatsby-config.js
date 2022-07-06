require('ts-node').register()

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'dev'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `Fast Food Control`,
        description: `Software para la gestión y control de negocios de comidas rápidas.`,
        author: `Ing. Juan Camilo Ordoñez Arbelaez`,
        siteUrl: `https://www.fastfood.com.co`,
    },
    plugins: [
        'gatsby-plugin-top-layout',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mui-emotion',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [require('autoprefixer')],
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Fast Food Control`,
                short_name: `FastFood`,
                start_url: `/`,
                background_color: `#222d32`,
                theme_color: `#1a2226`,
                display: `minimal-ui`,
                icon: `./src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
    ],
}
