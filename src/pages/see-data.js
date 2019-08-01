import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SeeData = () => {
  const data = useStaticQuery(graphql`
    query {
      allLettersCsv {
        edges {
          node {
            letter
            value
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="See Data" />
        <div>
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>ASCII Value</th>
              </tr>
            </thead>
            <tbody>
              {data.allLettersCsv.edges.map((row, i) => (
                <tr key={`${row.node.value} ${i}`}>
                  <td>{row.node.letter}</td>
                  <td>{row.node.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SeeData