import React, { useContext, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PageContext from "../context/PageContext"

function Blog(props) {
  const { location } = props
  const { isOpen, toggleMenu } = useContext(PageContext)
  useEffect(() => {
    isOpen && toggleMenu()
  }, [])
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
