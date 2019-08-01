import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const SearchData = () => {
  const data = useStaticQuery(graphql`
    query LetterByVal {
        lettersCsv(value: {eq: "68"}) {
            letter
            value
        }
    }
  `)

  return (
    <Layout>
      <SEO title="Search Data" />
        <div>
          {/* <input type="text" value={`variable`} /> */}
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>ASCII Value</th>
              </tr>
            </thead>
            <tbody>
                <tr key={`${data.lettersCsv.value}`}>
                  <td>{data.lettersCsv.letter}</td>
                  <td>{data.lettersCsv.value}</td>
                </tr>
            </tbody>
          </table>
        </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SearchData