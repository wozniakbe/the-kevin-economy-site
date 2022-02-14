import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import LeagueEvents from '../components/league-events/league-events';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>A static site with calculated financials for "The Kevin" salary cap fantasy football league.</p>
      <StaticImage
        alt="Traffic Cone"
        src="../images/traffic-cone.png"
        placeholder="blurred"
        layout="fullWidth"
      />
      <br />
      <LeagueEvents />
    </Layout>
  )
}

export default IndexPage