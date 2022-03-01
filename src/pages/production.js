import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SortableTable from '../components/sortable-table/sortable-table'

// imports

const ProductionPage = ({ data }) => {
    return (
        <Layout pageTitle="The Kevin - Player Production Values">
            <SortableTable data={data.allGooglePlayers2021Sheet.nodes} />
            <p><em>Return values for players with a $0 salary is broken</em></p>
        </Layout>
    )
}

export const query = graphql`
        query {
            allGooglePlayers2021Sheet {
            nodes {
                id
                player
                pos
                team
                franchise
                produced
                salary
                returned
                roi
            }
            }
        }
  `

export default ProductionPage
