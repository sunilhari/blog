import React from "react"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"

const Layout = ({ children, pathname, seoTitle, pageHeading }) => (
  <div className="font-sans leading-normal tracking-wider">
    <SEO title={seoTitle} />
    <Header pathname={pathname} />
    <div className="pt-6 md:pt-12 px-6 flex flex-wrap flex-col  items-center">
      <span className="text-4xl">{pageHeading}</span>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
