import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import PageContext from "../context/PageContext"

const Blogs = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { isOpen, toggleMenu } = useContext(PageContext)
  useEffect(() => {
    isOpen && toggleMenu()
  }, [])
  return (
    <Layout
      pathname={props.location.pathname}
      title={siteTitle}
      seoTitle={"My Writings"}
      pageHeading="All Posts"
    >
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const categories = node.frontmatter.categories
            ? node.frontmatter.categories.split(",")
            : []
          const slug = node.fields.slug
          const timeToRead = node.timeToRead
          const date = node.frontmatter.date
          const description = node.frontmatter.description || node.excerpt
          return (
            <Post
              key={node.fields.slug}
              date={date}
              title={title}
              slug={slug}
              description={description}
              timeToRead={timeToRead}
              categories={categories}
            />
          )
        })}
      </div>
    </Layout>
  )
}
export default Blogs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
          }
          timeToRead
        }
      }
    }
  }
`
