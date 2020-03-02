import React from "react"
import { PageContextProvider } from "./src/context/PageContext"
import "./src/styles/site.css"
// import "./src/styles/atom-dark-prism.css"
import "./src/styles/markdown.css"

export const wrapRootElement = ({ element }) => (
  <PageContextProvider>{element}</PageContextProvider>
)
