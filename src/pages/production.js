import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

// imports

const ProductionPage = ({ data }) => {
    return (
        <Layout pageTitle="The Kevin - Player Production Values">
            <table>
                <tr>
                    <th>Name</th>
                    <th>POS</th>
                    <th>Team</th>
                    <th>Franchise</th>
                    <th>Produced</th>
                    <th>Salary</th>
                    <th>Returned</th>
                    <th>ROI%</th>
                </tr>
                {
                    data.allGooglePlayersSheet.nodes.map((node) => (
                        <tr key={node.player}>
                            <th>{node.player}</th>
                            <td>{node.pos}</td>
                            <td>{node.team}</td>
                            <td>{node.franchise}</td>
                            <td>{node.produced}</td>
                            <td>{node.salary}</td>
                            <td>{node.returned}</td>
                            <td>{node.roi}</td>
                        </tr>
                    ))
                }
            </table>
        </Layout>
    )
}

export const query = graphql`
        query {
            allGooglePlayersSheet {
            nodes {
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
