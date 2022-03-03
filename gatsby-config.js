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
                credentials: {
                    type: 'service_account',
                    project_id: process.env.PROJECT_ID,
                    private_key_id: process.env.PRIVATE_KEY_ID,
                    private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
                    client_email: process.env.CLIENT_EMAIL,
                    client_id: process.env.CLIENT_ID,
                    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
                    token_uri: 'https://oauth2.googleapis.com/token',
                    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
                    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
                }
                // credentials: require('./credentials.json')
            }
        },
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'the-kevin-economy',
                short_name: 'kevin',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'standalone',
                icon: `src/images/football.png`,
            },
        },
    ]
}