import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'
import Footer from './footer/footer'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className={ container }>
            <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
            <header className={ siteTitle }><h1>{ data.site.siteMetadata.title }</h1></header>
            <nav>
                <ul className={ navLinks }>
                    <li className={ navLinkItem }>
                        <h4><Link to="/" className={ navLinkText }>
                            Home
                        </Link></h4>
                    </li>
                    <li className={ navLinkItem }>
                        <h4><Link to="/about" className={ navLinkText }>
                            About
                        </Link></h4>
                    </li>
                    <li className={ navLinkItem }>
                        <h4><Link to="/blog" className={ navLinkText }>
                            Blog
                        </Link></h4>
                    </li>
                    <li className={ navLinkItem }>
                        <h4><Link to="/production" className={ navLinkText }>
                            Production
                        </Link></h4>
                    </li>
                </ul>
            </nav>
            <main>
                <h2 className={ heading }>{ pageTitle }</h2>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout