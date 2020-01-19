import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

function Blog(props) {
  const { location } = props
  return (
    <Layout
      pathname={location.pathname}
      seoTitle="My space in WEB"
      pageHeading=""
    >
      <Hero />
    </Layout>
  )
}

export default Blog
