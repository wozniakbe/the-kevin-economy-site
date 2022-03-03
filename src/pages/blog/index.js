import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={ node.id }>
            <h3>
              <Link to={ `/blog/${node.slug}` }>
                { node.frontmatter.title }
              </Link>
            </h3>
            { node.timeToRead == '1' ? <p>Posted: { node.frontmatter.date }<br />Reading time: { node.timeToRead } minute</p> : <p>Posted: { node.frontmatter.date }<br />Reading time: { node.timeToRead } minutes</p> }
            <hr />
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        timeToRead
      }
    }
  }
`

export default BlogPage