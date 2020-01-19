import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const { previous, next, slug } = props.pageContext
  return (
    <Layout
      pathname={slug}
      title={post.frontmatter.title}
      seoTitle={post.frontmatter.title}
      pageHeading={""}
    >
      <div className="font-serif">
        <Link to={slug}>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {post.frontmatter.title}
          </h1>
        </Link>
        <p className="text-sm md:text-base font-normal text-gray-600">
          Published {post.frontmatter.date}
        </p>
        <div
          className="py-6 markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      timeToRead
    }
  }
`
