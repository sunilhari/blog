import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

function NotFoundPage(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout
      pathname={props.location.pathname}
      title={siteTitle}
      seoTitle={"404 - Not Found"}
      pageHeading="404 - Not Found"
    >
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.
        <span role="img" aria-label="Sad">
          😥
        </span>
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
