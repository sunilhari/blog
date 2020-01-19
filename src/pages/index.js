import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

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
