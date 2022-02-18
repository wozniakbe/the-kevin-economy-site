import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SortableTable from '../components/sortable-table/sortable-table'
import RookieTable2021 from '../components/player-tables/rookie-table-2021'

// imports

const ProductionPage = ({ data }) => {
    return (
        <Layout pageTitle="The Kevin - Top Earners">
            <div>
                <caption>Top Paid Players</caption>
                <SortableTable data={data.allGoogle2021TopPaidSheet.nodes} />
            </div>
            <div>
                <caption>Top Paid Rookies</caption>
                <RookieTable2021 />
            </div>
        </Layout>
    )
}

export const query = graphql`
        query {
            allGoogle2021TopPaidSheet {
            nodes {
                id
                player
                pOS
                team
                franchise
                produced
                salary
                returned
                rOI
            }
            }
            allGoogle2021RookiesDraftedSheet {
                nodes {
                    id
                    player
                    pOS
                    team
                    franchise
                    produced
                    salary
                    returned
                    rOI
                }
            }
        }
  `

export default ProductionPage
