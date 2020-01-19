/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./nav.css"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query Nav {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          firstname
          social {
            twitter
          }
        }
      }
    }
  `)

  const { firstname, social } = data.site.siteMetadata
  return (
    <div class="nav">
      <ul style={{ listStyle: "none" }} class="nav-list">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link>github</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
