module.exports = {
    siteMetadata: {
        title: `\"The Kevin\" Economy`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-google-spreadsheets',
            options: {
                spreadsheetId: '1_ZnC3_F6QmD32NvdjlMhId3qDt9ABrFVjCdEOYEunG8',
                credentials: require('./credentials.json')
            }
        },
        "gatsby-transformer-sharp",
    ]
}