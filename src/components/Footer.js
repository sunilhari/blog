import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <div className="relative w-full pt-16 pb-6 px-6 text-sm text-center text-right fade-in bottom-0 ">
      <a className="text-red-900 no-underline hover:no-underline" href="/">
        &copy; {author} {new Date().getFullYear()}
      </a>
    </div>
  )
}

export default Footer
