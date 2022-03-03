import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About the Site">
      <p>Welcome to "The Kevin" Economist!</p>
      <p>Evaluating players in fantasy sports can be hard. Add in a salary cap and player contracts, and things can get really confusing.</p>
      <p>The current purpose of this site is to display calculated financial data about performances relative to The Kevin dynasty football league.
        And probably other stuff.</p>
      <p>Along with the content, I am also creating the site from a base GatsbyJS website.
        If you think the presentation is lacking or the site could use a new feature, I would love to know.</p>
      <p>I hope you enjoy!</p>
    </Layout>
  )
}

export default AboutPage