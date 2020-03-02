import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const { previous, next, slug } = props.pageContext
  const { title, date, categories = [] } = post.frontmatter
  return (
    <Layout pathname={slug} title={title} seoTitle={title} pageHeading={""}>
      <div className="font-serif">
        <Link to={slug}>
          <h1 className="font-bold font-sans break-normal text-gray-900 pb-2 text-3xl md:text-4xl text-center">
            {title}
          </h1>
        </Link>
        <p className="pb-2 text-center">
          {categories.split(",").map(category => (
            <label class="bg-blue-900 text-white text-sm font-bold mr-2  p-1">
              #{category}
            </label>
          ))}
        </p>
        <p className="text-sm md:text-base font-normal text-gray-600 text-right">
          Published on {date}
        </p>
        <div
          className="py-10 markdown"
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
        categories
      }
      timeToRead
    }
  }
`
