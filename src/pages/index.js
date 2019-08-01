import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>This is an adaption of the <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-csv">gatsby-transformer-csv example</a> provided by gatsbyjs using up-to-date React Hooks and Functional Components.</p>
    <p>Also giving an example of using GraphQL to query through specific results based on specific data provided through form input.</p>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/see-data/">See all the data!</Link><br/>
    <Link to="/search-data/">Search for a specific result!</Link>
  </Layout>
)

export default IndexPage
