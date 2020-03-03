import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"

function RenderMDX(props) {
  return <MDXProvider {...props} components={{ code: CodeBlock }} />
}

export { RenderMDX }
