import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Seo from "./Seo"

const Layout = ({ children, pathname, seoTitle, pageHeading }) => (
  <div className="leading-normal tracking-wider">
    <Seo title={seoTitle} />
    <Header pathname={pathname} />
    <div className="pt-6 md:pt-12 px-6 flex flex-wrap flex-col  items-center">
      <span className="text-4xl">{pageHeading}</span>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
