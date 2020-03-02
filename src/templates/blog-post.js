import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/CodeBlock"

function BlogPostTemplate(props) {
  const post = props.data.mdx
  const { previous, next, slug } = props.pageContext
  const { title, date, categories = [] } = post.frontmatter
  return (
    <MDXProvider components={{ code: CodeBlock }}>
      <Layout pathname={slug} title={title} seoTitle={title} pageHeading={""}>
        <div className="font-serif">
          <Link to={slug}>
            <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-4xl text-center">
              {title}
            </h1>
          </Link>
          <p className="pb-2 text-center">
            {categories.split(",").map((category, index) => (
              <label
                key={index}
                className="bg-blue-900 text-white text-sm font-bold mr-2  p-1"
              >
                #{category}
              </label>
            ))}
          </p>
          <p className="text-sm md:text-base font-normal text-gray-600 text-right">
            Published on {date}
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          {previous && (
            <Link
              className="inline-block no-underline shadow-none hover:text-black hover:underline py-2"
              to={previous.fields.slug}
            >
              <span role="img" aria-label="Previous">
                👈🏻
              </span>{" "}
              {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              className="inline-block no-underline shadow-none hover:text-black hover:underline py-2 float-right"
              to={next.fields.slug}
            >
              {next.frontmatter.title}
              <span role="img" aria-label="Next">
                {" "}
                👉🏻
              </span>
            </Link>
          )}
        </div>
      </Layout>
    </MDXProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
      timeToRead
    }
  }
`
