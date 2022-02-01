// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About the Site">
      <p>Evaluating players in fantasy sports can be hard. Add in a salary cap and player contracts, and things can get really confusing.</p>
      <p>The current purpose of this site is to display calculated financial data about performances relate to The Kevin dynasty football league.</p>
      <p>These numbers are to be used in a context-neutral way. Your team can have a budget surplus of $1,000 but you are probably in last place. On the other hand, it is completely reasonable to overpay for players in pursuit of a championship.</p>
      <p>I hope you enjoy!</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage