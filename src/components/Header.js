import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PageContext from "../context/PageContext"

function Header({ pathname }) {
  const {
    site: {
      siteMetadata: { menuConfig, author },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          menuConfig {
            label
            path
            isExternal
          }
        }
      }
    }
  `)
  const { isOpen, toggleMenu } = useContext(PageContext)
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full  flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div
          className={`md:flex md:items-center md:w-auto w-full order-3 md:order-1 ${
            !isOpen ? "hidden" : null
          }`}
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              {menuConfig.map((menu, index) => {
                const { label, path, isExternal } = menu
                if (isExternal) {
                  return (
                    <li key={index}>
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {label}
                      </a>
                    </li>
                  )
                }
                if (pathname !== path) {
                  return (
                    <li key={index}>
                      <Link
                        className="inline-block no-underline shadow-none hover:text-black hover:underline py-2 px-4"
                        to={path}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <Link
            className="flex items-center tracking-wide shadow-none no-underline hover:no-underline font-bold text-gray-800 text-xl "
            to="/"
          >
            {author}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
